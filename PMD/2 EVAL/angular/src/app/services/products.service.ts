import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost/services/products/listProductsController.php');
  }

  getOneProduct(id: number): Observable<Product> {
    return of({
      id: 0,
      name: 'Jordan 24',
      description: 'Camiseta de Michale Jordan número 24 en chicago',
      price: 22.5,
      quantity: 10
    });
  }

  updateProduct(id: number): any {

  }

  deleteProduct(id: number): any {

  }
  
}
