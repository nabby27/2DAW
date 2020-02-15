import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { Client } from 'src/app/interfaces/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent implements OnInit {

  @Input() orders: Order[];
  linesOrder = null;

  clients: Client[];
  products: Product[];

  modalType: 'ADD'|'EDIT' = 'EDIT';
  orderSelected: Order = {
    id: 0,
    date: '',
    dniClient: '',
  };

  constructor(
    private clientsService: ClientsService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.clientsService.getAllClients().subscribe(
      (clients: Client[]) => this.clients = clients
    )

    this.productsService.getAllProducts().subscribe(
      (products: Product[]) => this.products = products
    )
  }

  openModalToAddOrder() {
    this.modalType = 'ADD';
    this.orderSelected = {
      id: 0,
      date: '',
      dniClient: '',
    }
  }

  updateOrderSelected(order: Order) {
    this.orderSelected = order;
  }

  addOrderOnTable(orderCreated: Order) {
    this.orders.push(orderCreated);
  }

  updateOrder(orderUpdated: Order) {
    this.orders = this.orders.map(order => order.id === orderUpdated.id ? orderUpdated : order);
  }

  removeOrder(orderRemoved: Order) {
    this.orders = this.orders.filter(order => order.id !== orderRemoved.id);
  }

}
