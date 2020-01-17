import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

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
  products: Product[] = [
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: '../../assets/ssd.jpg',
      rating: 5
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: '../../assets/motherboard.jpg',
      rating: 4
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
