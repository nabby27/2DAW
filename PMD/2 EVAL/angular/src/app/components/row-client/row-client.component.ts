import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-row-client',
  templateUrl: './row-client.component.html',
  styleUrls: ['./row-client.component.css']
})
export class RowClientComponent implements OnInit {

  @Input() client: Client;
  @Output() clientSelected = new EventEmitter<Client>();

  constructor() { }

  ngOnInit() {
  }

  selectClient(client: Client) {
    this.clientSelected.emit(client);
  }
}
