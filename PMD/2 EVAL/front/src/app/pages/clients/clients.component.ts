import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
    this.clientsService.getAllClients().subscribe(
      (clients) => this.clients = clients
    )
  }

}
