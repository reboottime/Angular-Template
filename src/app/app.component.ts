import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@models/app-state.model';
import { FeatureModule, PageModule } from '@models/feature-module.model';
import { User, UserRole } from '@models/user.model';

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe((data) => (this.user = data.user));

    const allowedRoutes = settingsFeatureRoutes.filter((route) => {
      return route.data?.['roles'].every((role: UserRole) => this.user?.roles.includes(role));
    });

    const settingsModule = new FeatureModule({
      title: 'Settings',
      path: SETTINGS_PATH,
      childModules: allowedRoutes.map((route) => {
        return new PageModule({
          title: route.data?.['title'],
          path: `/${SETTINGS_PATH}/${route.path}`,
        });
      }),
    });

    this.appModules.push(settingsModule);
  }
}
