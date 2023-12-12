import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@models/app-state.model';
import { FeatureModule, PageModule } from '@models/feature-module.model';
import { User, UserRole } from '@models/user.model';
import { AuthService } from '@services/auth.service';

import { SETTINGS_PATH } from './app-routing.module';
import { routes as settingsFeatureRoutes } from './settings/settings-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  user: User | null = null;
  appModules: FeatureModule[] = [];

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe(({user}) => {
      this.user = user;
      this.setUserAppModules(user);
    });
  }

  private setUserAppModules(user: User | null) {
    if (!user) return;

    const allowedRoutes = settingsFeatureRoutes.filter((route) => {
      const isAuthorized = this.authService.hasRequiredRoles(user, route.data?.['roles'] ?? []);

      return isAuthorized && !route.redirectTo;
    });

    const settingsModule = new FeatureModule({
      title: 'Settings',
      path: SETTINGS_PATH,
      childModules: allowedRoutes.map((route) => {
        return new PageModule({
          title: route.title ?? route.data?.['title'],
          path: `/${SETTINGS_PATH}/${route.path}`,
        });
      }),
    });

    this.appModules.push(settingsModule);
  }
}
