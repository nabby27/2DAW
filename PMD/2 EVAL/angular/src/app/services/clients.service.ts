import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../interfaces/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    // return of([{
    //   id: 0,
    //   name: 'Iván',
    //   surname: 'Córdoba',
    //   dni: '53878388z',
    //   email: 'ivancordoba77@gmail.com',
    //   telephone: '622871539',
    //   birthday: '27/06/1996'
    // },
    // {
    //   id: 1,
    //   name: 'Iván2',
    //   surname: 'Córdoba2',
    //   dni: '53878388z2',
    //   email: 'ivancordoba772@gmail.com',
    //   telephone: '6228715392',
    //   birthday: '27/06/19962'
    // }]);

    return this.http.get<Client[]>('http://localhost/services/clients/listClientsController.php');
  }

  getOneClient(id: number): Observable<Client> {
    return of({
      id: 0,
      name: 'Iván',
      surname: 'Córdoba',
      dni: '53878388z',
      email: 'ivancordoba77@gmail.com',
      telephone: '622871539',
      birthday: '27/06/1996'
    });

    return this.http.get<Client>('http://localhost/client/' + id);

  }

  updateClient(client: Client): Observable<boolean> {
    return this.http.put<boolean>('http://localhost/client/' + client.id, client);
  }

  deleteClient(id: number): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost/client/' + id);
  }

}
