import { Component, OnInit, Input } from '@angular/core';
import { LineOrder } from 'src/app/interfaces/line-order';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-table-lines-order',
  templateUrl: './table-lines-order.component.html',
  styleUrls: ['./table-lines-order.component.css']
})
export class TableLinesOrderComponent implements OnInit {

  @Input() order: Order;
  @Input() linesOrder: LineOrder[];

  modalType: 'ADD'|'EDIT' = 'EDIT';
  
  lineOfOrderSelected: LineOrder
  
  constructor() { }
  
  ngOnInit() {
    this.lineOfOrderSelected = {
      orderId: this.order.id,
      lineId: 0,
      productId: 0,
      quantity: 0
    };
  }

  openModalToAddLineOfOrder() {
    this.modalType = 'ADD';
    this.lineOfOrderSelected = {
      orderId: this.order.id,
      lineId: 0,
      productId: 0,
      quantity: 0
    }
  }

  updateLineOfOrderSelected(lineOfOrder: LineOrder) {
    this.lineOfOrderSelected = lineOfOrder;
  }

  addLineOfOrderOnTable(lineOfOrder: LineOrder) {
    this.linesOrder.push(lineOfOrder);
  }

  updateLineOfOrder(lineOfOrderUpdated: LineOrder) {
    this.linesOrder = this.linesOrder.map(
      lineOfOrder => lineOfOrder.lineId === lineOfOrderUpdated.lineId ? lineOfOrderUpdated : lineOfOrder);
  }

  removeLineOfOrder(lineOfOrderRemoved: LineOrder) {
    this.linesOrder = this.linesOrder.filter(lineOfOrder => lineOfOrder.lineId !== lineOfOrderRemoved.lineId);
  }

}
