import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';

export const SETTINGS_PATH = 'app/settings';
export const AUTH_PATH = 'auth';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AUTH_PATH
  },
  {
    path: AUTH_PATH,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: SETTINGS_PATH,
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
