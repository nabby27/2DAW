import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent implements OnInit {

  @Input() orders: Order[];
  linesOrder = null;
  
  constructor() { }

  ngOnInit() {
  }

}
