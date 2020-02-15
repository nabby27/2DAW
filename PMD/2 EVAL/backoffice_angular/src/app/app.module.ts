import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './components/menu/menu.module';
import { registerLocaleData } from '@angular/common';
import ESP from '@angular/common/locales/es';

registerLocaleData(ESP);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
