import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { BillingsComponent } from './billings/billings.component';
import { DevelopersComponent } from './developers/developers.component';
import { OrganizationComponent } from './organization/organization.component';

// Please notice, there is no /settings as module prefix, as we want this routing module to be plugable
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile', // How we do redirect on module root path,
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent,
    title: 'Profile',
  },
  {
    path: 'organization',
    pathMatch: 'full',
    component: OrganizationComponent,
    title: 'Organization',
  },
  {
    path: 'billings',
    pathMatch: 'full',
    component: BillingsComponent,
    title: 'Billings',
  },
  {
    path: 'developers',
    pathMatch: 'full',
    component: DevelopersComponent,
    title: 'Developers',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}