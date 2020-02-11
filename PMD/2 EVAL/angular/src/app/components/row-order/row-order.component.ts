import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { LinesOrderService } from 'src/app/services/lines-order.service';
import { LineOrder } from 'src/app/interfaces/line-order';
import { Client } from 'src/app/interfaces/client';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-row-order',
  templateUrl: './row-order.component.html',
  styleUrls: ['./row-order.component.css']
})
export class RowOrderComponent implements OnInit {

  @Input() order: Order;
  @Input() clients: Client[];
  @Input() products: Product[];
  @Output() orderSelected = new EventEmitter<Order>();

  linesOrder: LineOrder[];
  linesOrderAreOpened: boolean = false;

  constructor(
    private linesOrderService: LinesOrderService
  ) { }

  ngOnInit() {

  }

  getClientName(dniClient: string): string {
    const client = this.clients.filter(client => client.dni === dniClient)[0];
    if (client) {
      return client.name;
    }
  }

  toggleShowLines(orderId: number) {
    if (this.linesOrderAreOpened) {
      this.linesOrderAreOpened = false;
    } else {
      this.linesOrderService.getAllLinesOfOrder(orderId).subscribe(
        (linesOrder) => {
          this.linesOrder = linesOrder
          this.linesOrderAreOpened = true;
        }
      )
    }
  }

  selectOrder(order: Order) {
    this.orderSelected.emit(order);
  }

}
