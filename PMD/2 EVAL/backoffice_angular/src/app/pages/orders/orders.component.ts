import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/interfaces/order';
import { LinesOrderService } from 'src/app/services/lines-order.service';
import { LineOrder } from 'src/app/interfaces/line-order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  linesOrder: LineOrder[];

  constructor(
    private ordersService: OrdersService,
    private linesOrderService: LinesOrderService
  ) { }

  ngOnInit() {
    this.ordersService.getAllOrders().subscribe(
      (orders) => this.orders = orders
    )
  }

}
