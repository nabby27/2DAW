import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  @Input() clients: Client[];

  constructor() { }

  ngOnInit() {
  }

}
