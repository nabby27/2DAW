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

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost/services/clients/addClientController.php', client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>('http://localhost/services/clients/updateClientController.php?dni=' + client.dni, client);
  }

  deleteClient(dni: string): Observable<object> {
    return this.http.delete<object>('http://localhost/services/clients/removeClientController.php?dni=' + dni);
  }

}
