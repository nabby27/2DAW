import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { Routes, RouterModule } from '@angular/router';
import { TableOrdersComponent } from 'src/app/components/table-orders/table-orders.component';
import { RowOrderComponent } from 'src/app/components/row-order/row-order.component';
import { TableLinesOrderComponent } from 'src/app/components/table-lines-order/table-lines-order.component';
import { RowLineOrderComponent } from 'src/app/components/row-line-order/row-line-order.component';
import { ModalOrderComponent } from 'src/app/components/modals/modal-order/modal-order.component';
import { ModalDeleteOrderComponent } from 'src/app/components/modals/modal-delete-order/modal-delete-order.component';
import { FormsModule } from '@angular/forms';
import { ModalLineOfOrderComponent } from 'src/app/components/modals/modal-line-of-order/modal-line-of-order.component';
import { ModalDeleteLineOfOrderComponent } from 'src/app/components/modals/modal-delete-line-of-order/modal-delete-line-of-order.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
];

@NgModule({
  declarations: [
    OrdersComponent,
    TableOrdersComponent,
    RowOrderComponent,
    ModalOrderComponent,
    ModalDeleteOrderComponent,
    TableLinesOrderComponent,
    RowLineOrderComponent,
    ModalLineOfOrderComponent,
    ModalDeleteLineOfOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
