import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AppState } from '@models/app-state.model';
import { UserRole } from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RolesGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select('auth').pipe(
      take(1),
      map((authState) => {
        const userRoles = authState.user?.roles ?? [];
        const requiredRoles = route.data?.['roles'] ?? [];

        const hasRequiredRole = requiredRoles.every((role: UserRole) =>
          userRoles.includes(role)
        );

        if (hasRequiredRole) {
          return true;
        } else {
          // Redirect to a forbidden page or handle unauthorized access
          this.router.navigate(['/forbidden']);
          return false;
        }
      })
    );
  }
}
