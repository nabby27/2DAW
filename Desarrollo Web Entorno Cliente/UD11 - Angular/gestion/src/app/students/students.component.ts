import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    {
      name: 'Pepe',
      dni: '54789621D',
      date_of_birth: '1992-05-02',
      email: 'pepe@gmail.com',
      telephon: '+34 622 54 78 13',
      cycles: [
        {
          name: 'DIW'
        },
        {
          name: 'DWS'
        },
      ]
    },
    {
      name: 'manolo',
      dni: '45812696F',
      date_of_birth: '1998-02-03',
      email: 'pepe@gmail.com',
      telephon: '+34 623 78 12 13',
      cycles: [
        {
          name: 'DWS'
        },
        {
          name: 'DWC'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
