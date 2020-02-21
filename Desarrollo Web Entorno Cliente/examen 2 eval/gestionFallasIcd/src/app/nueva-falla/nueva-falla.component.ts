import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IFalla } from '../interfaz/ifalla';
import { FallasService } from '../servicio/fallas.service';


@Component({
  selector: 'app-nueva-falla',
  templateUrl: './nueva-falla.component.html',
  styleUrls: ['./nueva-falla.component.css']
})
export class NuevafallaComponent implements OnInit {

  @Output() newFalla = new EventEmitter<IFalla>();
  @Output() closeForm = new EventEmitter();

  nuevaFalla: IFalla = {
    nombre: '',
    direccion: '',
    categoria: 0,
    carpa: false
  }

  constructor(
    private fallasService: FallasService
  ) { }

  ngOnInit() {
  }

  cancelForm() {
    this.nuevaFalla = {
      nombre: '',
      direccion: '',
      categoria: 0,
      carpa: false
    }

    this.closeForm.emit();
  }

  sendForm() {
    this.fallasService.addNewFalla(this.nuevaFalla).subscribe(
      (response) => {
        if (response) {
          this.newFalla.emit(this.nuevaFalla);
          alert('Realizado con éxito');
        } else {
          alert('Ha sucedio un error');
        }
      }
    )
  }

}
