import { Component, OnInit, Input } from '@angular/core';
import { LineOrder } from 'src/app/interfaces/line-order';

@Component({
  selector: 'app-table-lines-order',
  templateUrl: './table-lines-order.component.html',
  styleUrls: ['./table-lines-order.component.css']
})
export class TableLinesOrderComponent implements OnInit {

  @Input() linesOrder: LineOrder[];

  constructor() { }

  ngOnInit() {
  }

}
