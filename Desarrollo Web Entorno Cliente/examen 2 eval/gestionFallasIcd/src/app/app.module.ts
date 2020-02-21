import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaFallasComponent } from './lista-fallas/lista-fallas.component';
import { ItemFallaComponent } from './item-falla/item-falla.component';
import { NuevafallaComponent } from './nueva-falla/nueva-falla.component';
import { FallasService } from './servicio/fallas.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListaFallasComponent,
    ItemFallaComponent,
    NuevafallaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FallasService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
