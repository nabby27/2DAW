import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getAllClients(): Observable<Client[]> {
    return of([{
      id: 0,
      name: 'Iván',
      surname: 'Córdoba',
      dni: '53878388z',
      email: 'ivancordoba77@gmail.com',
      telephone: '622871539',
      birthday: '27/06/1996'
    },
    {
      id: 1,
      name: 'Iván2',
      surname: 'Córdoba2',
      dni: '53878388z2',
      email: 'ivancordoba772@gmail.com',
      telephone: '6228715392',
      birthday: '27/06/19962'
    }]);
  }

  getOneClient(): Observable<Client> {
    return of({
      id: 0,
      name: 'Iván',
      surname: 'Córdoba',
      dni: '53878388z',
      email: 'ivancordoba77@gmail.com',
      telephone: '622871539',
      birthday: '27/06/1996'
    });
  }

  updateClient(id: number): any {

  }

  deleteClient(id: number): any {

  }

}
