import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isOpenStudents: boolean = false;
  isOpenCycles: boolean = false;

  constructor() {}

  ngOnInit() {}

  openComponent(component: string) {
    if (component === CONSTANTS.STUDENTS) {
      this.isOpenStudents = true;
      this.isOpenCycles = false;
    } 
    if (component === CONSTANTS.CYCLES) {
      this.isOpenCycles = true;
      this.isOpenStudents = false;
    }
  }

}
