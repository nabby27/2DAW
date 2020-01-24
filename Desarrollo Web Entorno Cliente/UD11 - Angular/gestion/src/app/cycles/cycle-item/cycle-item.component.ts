import { Component, OnInit, Input } from '@angular/core';
import { Cycle } from 'src/app/interfaces/cycle';

@Component({
  selector: 'app-cycle-item',
  templateUrl: './cycle-item.component.html',
  styleUrls: ['./cycle-item.component.css']
})
export class CycleItemComponent implements OnInit {

  @Input() cycle: Cycle;

  constructor() { }

  ngOnInit() {
  }

}
