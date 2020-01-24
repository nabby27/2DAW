import { Component, OnInit } from '@angular/core';
import { Cycle } from '../interfaces/cycle';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css']
})
export class CyclesComponent implements OnInit {

  cycles: Cycle[] = [
    {
      name: 'DIW'
    },
    {
      name: 'DWS'
    },
    {
      name: 'DWC'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
