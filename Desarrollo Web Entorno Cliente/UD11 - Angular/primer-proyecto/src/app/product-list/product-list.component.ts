import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showImage = true;
  filterSearch: string = '';
  title = "My product's list";
  headers = {desc: 'Producto', price: 'Precio', avail: 'Disponible'};
  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
