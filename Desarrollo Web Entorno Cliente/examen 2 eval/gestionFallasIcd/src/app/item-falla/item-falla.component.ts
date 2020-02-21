import { Component, OnInit, Input } from '@angular/core';
import { IFalla } from '../interfaz/ifalla';

@Component({
  selector: 'app-item-falla',
  templateUrl: './item-falla.component.html',
  styleUrls: ['./item-falla.component.css']
})
export class ItemFallaComponent implements OnInit {

  @Input() falla: IFalla;

  constructor() { }

  ngOnInit() {
  }

}
