import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LineOrder } from '../interfaces/line-order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinesOrderService {

  constructor(private http: HttpClient) { }
  
  getAllLinesOfOrder(orderId: number): Observable<LineOrder[]> {
    return this.http.get<LineOrder[]>('http://localhost/services/orders/getLinesOfOneOrderController.php?idOrder=' + orderId);
  }

  getOneLineOrder(id: number): Observable<LineOrder> {
    return of({
      lineId: 0,
      orderId: 0,
      productId: 0
    });
  }

  updateLineOrder(id: number): any {

  }

  deleteLineOrder(id: number): any {

  }

}
