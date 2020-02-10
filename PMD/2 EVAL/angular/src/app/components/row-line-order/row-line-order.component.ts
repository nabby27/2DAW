import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LineOrder } from 'src/app/interfaces/line-order';

@Component({
  selector: 'app-row-line-order',
  templateUrl: './row-line-order.component.html',
  styleUrls: ['./row-line-order.component.css']
})
export class RowLineOrderComponent implements OnInit {

  @Input() lineOrder: LineOrder
  @Output() lineOfOrderSelected = new EventEmitter<LineOrder>();

  constructor() { }

  ngOnInit() {
  }

  selectLineOfOrder(lineOfOrder: LineOrder) {
    this.lineOfOrderSelected.emit(lineOfOrder);
  }
}
