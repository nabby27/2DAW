import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  @Input() products: Product[];

  modalType: 'ADD'|'EDIT' = 'EDIT';
  productSelected: Product = {
    id: 0,
    name: '',
    description: '',
    image: '',
    brand: '',
    quantity: 0,
    price: 0
  };

  constructor() { }

  ngOnInit() {
  }

  openModalToAddProduct() {
    this.modalType = 'ADD';
    this.productSelected = {
      id: 0,
      name: '',
      description: '',
      image: '',
      brand: '',
      quantity: 0,
      price: 0
    }
  }

  updateProductSelected(product: Product) {
    this.productSelected = product;
  }

  addProductOnTable(productCreated: Product) {
    this.products.push(productCreated);
  }

  updateProduct(productUpdated: Product) {
    this.products = this.products.map(product => product.id === productUpdated.id ? productUpdated : product);
  }

  removeProduct(productRemoved: Product) {
    this.products = this.products.filter(product => product.id !== productRemoved.id);
  }
  
}
