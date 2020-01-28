import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './product-list/product-list.module';
import { ProductsService } from './service/products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
