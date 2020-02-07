import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { Routes, RouterModule } from '@angular/router';
import { TableClientsComponent } from 'src/app/components/table-clients/table-clients.component';
import { RowClientComponent } from 'src/app/components/row-client/row-client.component';
import { ModalClientComponent } from 'src/app/components/modal-client/modal-client.component';
import { ModalDeleteClientComponent } from 'src/app/components/modal-delete-client/modal-delete-client.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ClientsComponent },
];

@NgModule({
  declarations: [
    ClientsComponent,
    TableClientsComponent,
    RowClientComponent,
    ModalClientComponent,
    ModalDeleteClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientsModule { }
