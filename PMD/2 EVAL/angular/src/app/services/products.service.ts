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
      name: 'Jordan 24',
      description: 'Camiseta de Michale Jordan número 24 en chicago',
      price: 22.5,
      quantity: 10
    }, {
      id: 0,
      name: 'Jordan 25',
      description: 'Camiseta de Michale Jordan número 25 en chicago',
      price: 22,
      quantity: 3
    }]);
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
