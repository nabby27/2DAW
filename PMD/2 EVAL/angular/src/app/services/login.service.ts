import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginAdmin(user: Login): Observable<Client> {
    return this.http.get<Client>('http://localhost/services/clients/loginController.php?dni=' + user.dni + '&password=' + user.password);
  }

}
