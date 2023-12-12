import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@models/app-state.model';
import * as authActions from '@store/auth.actions';
import { User, UserRole } from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store<AppState>) {}

  loginUser() {
    this.store.dispatch(authActions.login(FAKE_USER));
  }

  logoutUser() {
    this.store.dispatch(authActions.logout());
  }

  hasRequiredRoles(user: User, roles: UserRole[]) {
    return roles.every(role => user.roles.includes(role));
  }
}

const FAKE_USER = {
  email: 'angularSPA@angular.com',
  firstName: 'Angular',
  lastName: 'SPA',
  roles: [1, 3],
  organizationId: '',
};
