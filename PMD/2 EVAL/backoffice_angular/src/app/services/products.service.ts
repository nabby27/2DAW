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

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost/services/products/addProductController.php', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>('http://localhost/services/products/updateProductController.php?id=' + product.id, product);
  }

  deleteProduct(id: number):  Observable<object> {
    return this.http.delete<object>('http://localhost/services/products/removeProductController.php?id=' + id);
  }

}
