import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const SETTINGS_PATH = 'app/settings';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: SETTINGS_PATH,
  },
  {
    path: SETTINGS_PATH,
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
