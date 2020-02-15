import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-row-product',
  templateUrl: './row-product.component.html',
  styleUrls: ['./row-product.component.css']
})
export class RowProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productSelected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  selectProduct(product: Product) {
    this.productSelected.emit(product);
  }

}
