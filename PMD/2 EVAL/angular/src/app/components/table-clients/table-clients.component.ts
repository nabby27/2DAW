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
    birthday: '',
    dni: '',
    email: '',
    name: '',
    surname: '',
    telephone: ''
  };

  constructor() { }

  ngOnInit() { 
  }

  openModalToAddClient() {
    this.modalType = 'ADD';
    this.clientSelected = {
      birthday: '',
      dni: '',
      email: '',
      name: '',
      surname: '',
      telephone: ''
    }
  }

  updateClientSelected(client: Client) {
    this.clientSelected = client;
  }

  updateClient(clientUpdated: Client) {
    this.clients = this.clients.filter(client => client.dni !== clientUpdated.dni);
  }

  removeClient(clientRemoved: Client) {
    this.clients = this.clients.filter(client => client.dni !== clientRemoved.dni);
  }

}
