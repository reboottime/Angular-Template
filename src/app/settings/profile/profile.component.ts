import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '@models/app-state.model';
import { UserRole } from '@models/user.model';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  // Init form value and setup field validator
  userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roles: [[UserRole.Basic], Validators.required],
    organizationId: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.select('auth').subscribe((data) => {
      if (data.user) {
        // populate form value
        this.userForm.patchValue(data.user);
      }
    });
  }

  onFormSubmit() {
    console.info(this.userForm.value);
  }
}
