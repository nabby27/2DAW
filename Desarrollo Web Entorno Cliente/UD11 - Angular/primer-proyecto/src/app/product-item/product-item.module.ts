import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';



@NgModule({
  declarations: [
    ProductItemComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductItemComponent,
    StarRatingComponent
  ]
})
export class ProductItemModule { }
