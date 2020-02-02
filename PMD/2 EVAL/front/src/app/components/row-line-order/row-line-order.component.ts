import { Component, OnInit, Input } from '@angular/core';
import { LineOrder } from 'src/app/interfaces/line-order';

@Component({
  selector: 'app-row-line-order',
  templateUrl: './row-line-order.component.html',
  styleUrls: ['./row-line-order.component.css']
})
export class RowLineOrderComponent implements OnInit {

  @Input() lineOrder: LineOrder

  constructor() { }

  ngOnInit() {
  }

}
