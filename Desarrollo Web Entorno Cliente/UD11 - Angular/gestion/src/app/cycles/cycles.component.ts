import { Component, OnInit } from '@angular/core';
import { Cycle } from '../interfaces/cycle';
import { CyclesService } from '../services/cycles.service';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css']
})
export class CyclesComponent implements OnInit {

  cycles: Cycle[];

  constructor(private cyclesService: CyclesService) { }

  ngOnInit() {
    this.cyclesService.getCycles().subscribe(
      (cycles: Cycle[]) => this.cycles = cycles,
      (error: any) => console.error(error)
    )
  }

}
