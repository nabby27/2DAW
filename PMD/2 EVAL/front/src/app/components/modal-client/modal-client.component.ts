import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.css']
})
export class ModalClientComponent implements OnInit {

  title: string = 'Añadir usuario';

  constructor() { }

  ngOnInit() {
  }

}
