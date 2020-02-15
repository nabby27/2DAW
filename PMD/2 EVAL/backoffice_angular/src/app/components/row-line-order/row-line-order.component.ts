import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LineOrder } from 'src/app/interfaces/line-order';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-row-line-order',
  templateUrl: './row-line-order.component.html',
  styleUrls: ['./row-line-order.component.css']
})
export class RowLineOrderComponent implements OnInit {

  @Input() lineOrder: LineOrder;
  @Input() products: Product[];
  @Output() lineOfOrderSelected = new EventEmitter<LineOrder>();

  constructor() { }

  ngOnInit() {
  }

  getProductName(productId: number): string {
    const product = this.products.filter(product => product.id === parseInt(productId+""))[0];
    if (product) {      
      return product.name;
    }
  }

  selectLineOfOrder(lineOfOrder: LineOrder) {
    this.lineOfOrderSelected.emit(lineOfOrder);
  }
}
