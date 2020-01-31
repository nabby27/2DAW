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
      name: 'string',
      surname: 'string',
      dni: 'string',
      email: 'string',
      telephone: 'string',
      birthday: 'string'
    }]);
  }

  getOneClient(): Observable<Client> {
    return of({
      id: 0,
      name: 'string',
      surname: 'string',
      dni: 'string',
      email: 'string',
      telephone: 'string',
      birthday: 'string'
    });
  }

  updateClient(id: number): any {

  }

  deleteClient(id: number): any {

  }

}
