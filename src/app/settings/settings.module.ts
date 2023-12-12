import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationComponent } from './organization/organization.component';
import { DevelopersComponent } from './developers/developers.component';


@NgModule({
  declarations: [
    DevelopersComponent,
    OrganizationComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
