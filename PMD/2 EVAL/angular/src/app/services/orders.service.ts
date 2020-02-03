import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getAllOrders(): Observable<Order[]> {
    return of([{
      id: 0,
      date: '27/09/1996',
      dniClient: '53878388Z'
    },
    {
      id: 1,
      date: '28/09/1996',
      dniClient: '53878388Z1'
    }]);
  }

  getOneOrder(id: number): Observable<Order> {
    return of({
      id: 0,
      date: '27/09/1996',
      dniClient: '53878388Z'
    });
  }

  updateOrder(id: number): any {

  }

  deleteOrder(id: number): any {

  }
  
}
