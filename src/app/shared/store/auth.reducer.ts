import { createReducer, on } from '@ngrx/store';

import { User } from '@models/user.model';

import * as authActions from './auth.actions';

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
};

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const authReducer = createReducer(
  INITIAL_STATE,
  on(authActions.login, (_state, { type, ...user }) => {
    return {
      isLoggedIn: true,
      user,
    };
  }),
  on(authActions.logout, () => {
    return INITIAL_STATE;
  })
);
