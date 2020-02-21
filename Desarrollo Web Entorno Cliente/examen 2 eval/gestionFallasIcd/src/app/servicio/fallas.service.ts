import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFalla } from '../interfaz/ifalla';

@Injectable({
  providedIn: 'root'
})
export class FallasService {

  constructor(private http: HttpClient) { }

  getAllFallas(): Observable<IFalla[]> {
    return this.http.get<IFalla[]>('http://localhost/fallas.php');
  }

  addNewFalla(newFalla: IFalla): Observable<boolean> {
    return this.http.post<boolean>('http://localhost/fallas.php', newFalla);
  }
}
