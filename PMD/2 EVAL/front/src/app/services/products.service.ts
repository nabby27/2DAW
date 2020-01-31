import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of([{
      id: 0,
      name: 'string',
      description: 'string',
      price: 0,
      quantity: 0
    }]);
  }

  getOneProduct(id: number): Observable<Product> {
    return of({
      id: 0,
      name: 'string',
      description: 'string',
      price: 0,
      quantity: 0
    });
  }

  updateProduct(id: number): any {

  }

  deleteProduct(id: number): any {

  }
  
}
