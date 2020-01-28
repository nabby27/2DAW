import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[] = [
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

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost/alumno.php').pipe(
      map((response: any) => response.alumnos)
    )
  }

}
