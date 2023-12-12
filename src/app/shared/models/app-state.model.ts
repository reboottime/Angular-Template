import { User } from './user.model';

export class AppState {
  auth: {
    isLoggedIn: boolean;
    user: User | null;
  };

  constructor() {
    this.auth = {
      isLoggedIn: false,
      user: null,
    };
  }
}
