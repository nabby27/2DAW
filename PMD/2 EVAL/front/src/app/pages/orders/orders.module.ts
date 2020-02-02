import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { Routes, RouterModule } from '@angular/router';
import { TableOrdersComponent } from 'src/app/components/table-orders/table-orders.component';
import { RowOrderComponent } from 'src/app/components/row-order/row-order.component';
import { TableLinesOrderComponent } from 'src/app/components/table-lines-order/table-lines-order.component';
import { RowLineOrderComponent } from 'src/app/components/row-line-order/row-line-order.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
];

@NgModule({
  declarations: [
    OrdersComponent,
    TableOrdersComponent,
    RowOrderComponent,
    TableLinesOrderComponent,
    RowLineOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
