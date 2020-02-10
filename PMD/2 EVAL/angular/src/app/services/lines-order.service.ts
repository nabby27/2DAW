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

  saveLineOfOrder(lineOrder: LineOrder): Observable<LineOrder> {
    return this.http.post<LineOrder>('http://localhost/services/orders/addLineController.php', lineOrder);
  }
  
  updateLineOfOrder(lineOrder: LineOrder): Observable<LineOrder> {
    return this.http.put<LineOrder>('http://localhost/services/orders/updateLineController.php?idOrder=' + lineOrder.orderId + '&idLine=' + lineOrder.lineId, lineOrder);
  }

  deleteLineOfOrder(idOrder: number, idLine: number): Observable<object> {
    return this.http.delete<object>('http://localhost/services/orders/removeLineOfOrderController.php?idOrder=' + idOrder + '&idLine=' + idLine);
  }

}
