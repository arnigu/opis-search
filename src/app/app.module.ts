import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/modules/core/core.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeIs from '@angular/common/locales/is';
import localeFr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  exports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    // the second parameter 'fr' is optional
    registerLocaleData(localeIs);
    registerLocaleData(localeFr);
  }

 }
