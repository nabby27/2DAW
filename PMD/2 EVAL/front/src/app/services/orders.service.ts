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
      date: 'string',
      dniClient: 'string'
    }]);
  }

  getOneOrder(id: number): Observable<Order> {
    return of({
      id: 0,
      date: 'string',
      dniClient: 'string'
    });
  }

  updateOrder(id: number): any {

  }

  deleteOrder(id: number): any {

  }
  
}
