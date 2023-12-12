import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@models/app-state.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {
    this.store.select('auth').subscribe(data => this.isAuthenticated = !!data.isLoggedIn);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated;
  }
}
