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
    return this.http.get<Client[]>('http://localhost/services/clients/listClientsController.php');
  }

  saveClient(client: Client): Observable<object> {
    return this.http.post<object>('http://localhost/services/clients/addClientController.php', client);
  }

  updateClient(client: Client): Observable<object> {
    return this.http.put<object>('http://localhost/client/' + client.dni, client);
  }

  deleteClient(dni: string): Observable<object> {
    return this.http.delete<object>('http://localhost/services/clients/removeClientController.php?dni=' + dni);
  }

}
