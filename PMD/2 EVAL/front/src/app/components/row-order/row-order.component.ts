import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { LinesOrderService } from 'src/app/services/lines-order.service';
import { LineOrder } from 'src/app/interfaces/line-order';

@Component({
  selector: 'app-row-order',
  templateUrl: './row-order.component.html',
  styleUrls: ['./row-order.component.css']
})
export class RowOrderComponent implements OnInit {

  @Input() order: Order;
  linesOrder: LineOrder[];
  linesOrderAreOpened: boolean = false;

  constructor(
    private linesOrderService: LinesOrderService
  ) { }

  ngOnInit() {
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

}
