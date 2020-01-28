import { Injectable } from '@angular/core';
import { Cycle } from '../interfaces/cycle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CyclesService {

  private cycles: Cycle[] = [
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

  getCycles(): Observable<Cycle[]> {
    return of(this.cycles);
  }
}
