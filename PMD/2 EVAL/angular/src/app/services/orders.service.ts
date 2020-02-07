import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../interfaces/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost/services/orders/listOrdersController.php');
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
