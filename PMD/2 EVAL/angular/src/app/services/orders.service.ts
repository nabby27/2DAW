import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost/services/orders/addOrderController.php', order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>('http://localhost/services/orders/updateOrderController.php?idOrder=' + order.id, order);
  }

  deleteOrder(id: number): Observable<object> {
    return this.http.delete<object>('http://localhost/services/orders/removeOrderController.php?idOrder=' + id);
  }

}
