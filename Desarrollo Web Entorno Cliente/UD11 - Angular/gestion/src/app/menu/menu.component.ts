import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CONSTANTS } from '../constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() open = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  openStudents() {
    this.open.emit(CONSTANTS.STUDENTS);
  }

  openCycles() {
    this.open.emit(CONSTANTS.CYCLES);
  }

  closeAll(){
    this.open.emit(null);
  }

}
