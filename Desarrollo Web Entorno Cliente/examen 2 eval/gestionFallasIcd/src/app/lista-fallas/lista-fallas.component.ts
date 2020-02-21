import { Component, OnInit, Input } from '@angular/core';
import { IFalla } from '../interfaz/ifalla';

@Component({
  selector: 'app-lista-fallas',
  templateUrl: './lista-fallas.component.html',
  styleUrls: ['./lista-fallas.component.css']
})
export class ListaFallasComponent implements OnInit {

  @Input() fallas: IFalla[];

  constructor() { }

  ngOnInit() {

  }

}
