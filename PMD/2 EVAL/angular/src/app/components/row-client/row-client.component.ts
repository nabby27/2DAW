import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-row-client',
  templateUrl: './row-client.component.html',
  styleUrls: ['./row-client.component.css']
})
export class RowClientComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit() {
  }

}
