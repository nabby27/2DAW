import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(
      (students: Student[]) => this.students = students,
      (error: any) => console.error(error)
    )
  }

}
