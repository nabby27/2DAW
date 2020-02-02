import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
