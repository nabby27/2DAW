import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFilterPipe } from '../product-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent
  ]
})
export class ProductListModule { }
