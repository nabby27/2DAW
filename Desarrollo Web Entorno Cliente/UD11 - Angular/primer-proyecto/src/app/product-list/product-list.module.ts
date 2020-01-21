import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from '../filters/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProductItemModule } from '../product-item/product-item.module';
import { ProductsService } from '../service/products.service';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductItemModule
  ],
  exports: [
    ProductListComponent,
    ProductItemModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductListModule { }
