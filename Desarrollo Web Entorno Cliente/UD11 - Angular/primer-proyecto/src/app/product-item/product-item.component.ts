import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() showImage: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  changeRating(rating: number) {
    this.product.rating = rating;
  }
}
