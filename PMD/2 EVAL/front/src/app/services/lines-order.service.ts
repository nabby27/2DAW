import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LineOrder } from '../interfaces/line-order';

@Injectable({
  providedIn: 'root'
})
export class LinesOrderService {

  constructor() { }
  
  getAllLinesOfOrder(orderId: number): Observable<LineOrder[]> {
    return of([{
      id: 0,
      orderId: 0
    }]);
  }

  getOneLineOrder(id: number): Observable<LineOrder> {
    return of({
      id: 0,
      orderId: 0
    });
  }

  updateLineOrder(id: number): any {

  }

  deleteLineOrder(id: number): any {

  }

}
