import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientsComponent },
];

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientsModule { }
