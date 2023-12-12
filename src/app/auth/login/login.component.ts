import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@models/app-state.model';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router
  ) {}

  onLoginButtonClick() {
    this.authService.loginUser();
  }

  ngOnInit(): void {
    this.store.select('auth').subscribe((data) => {
      if (data.isLoggedIn) {
        this.router.navigate(['/app/settings']);
      }
    });
  }
}
