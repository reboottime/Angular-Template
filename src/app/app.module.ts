import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { authReducer } from '@store/auth.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({
      auth: authReducer
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
