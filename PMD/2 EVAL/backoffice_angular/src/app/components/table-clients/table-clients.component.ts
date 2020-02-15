import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  @Input() clients: Client[];

  modalType: 'ADD'|'EDIT' = 'EDIT';
  clientSelected: Client = {
    dni: '',
    name: '',
    address: '',
    email: '',
    password: '',
    password_verify: '',
    admin: false
  };

  constructor() { }

  ngOnInit() { 
  }

  openModalToAddClient() {
    this.modalType = 'ADD';
    this.clientSelected = {
      dni: '',
      name: '',
      address: '',
      email: '',
      password: '',
      password_verify: '',
      admin: false
    }
  }

  updateClientSelected(client: Client) {
    this.clientSelected = client;
  }

  addClientOnTable(clientCreated: Client) {
    this.clients.push(clientCreated);
  }

  updateClient(clientUpdated: Client) {
    this.clients = this.clients.map(client => client.dni === clientUpdated.dni ? clientUpdated : client);
  }

  removeClient(clientRemoved: Client) {
    this.clients = this.clients.filter(client => client.dni !== clientRemoved.dni);
  }

}
