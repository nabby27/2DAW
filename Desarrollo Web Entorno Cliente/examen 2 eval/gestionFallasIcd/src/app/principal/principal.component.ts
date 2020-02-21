import { Component, OnInit } from '@angular/core';
import { IFalla } from '../interfaz/ifalla';
import { FallasService } from '../servicio/fallas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  fallas: IFalla[] = [];
  isOpenForm = true;

  constructor(
    private fallasService: FallasService
  ) { }

  ngOnInit() {
    this.fallasService.getAllFallas().subscribe(
      (response) => this.fallas = response,
      (error) => console.error('Fallo al recoger todas las fallas')
    )
  }

  openForm() {
    this.isOpenForm = true;
  }

  closeForm() {
    this.isOpenForm = false;
  }

  addNewFalla(nuevaFalla: IFalla) {
    this.fallas.push(nuevaFalla);
  }
}
