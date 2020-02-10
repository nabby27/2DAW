import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { TableProductsComponent } from 'src/app/components/table-products/table-products.component';
import { RowProductComponent } from 'src/app/components/row-product/row-product.component';
import { ModalProductComponent } from 'src/app/components/modals/modal-product/modal-product.component';
import { ModalDeleteProductComponent } from 'src/app/components/modals/modal-delete-product/modal-delete-product.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    TableProductsComponent,
    RowProductComponent,
    ModalProductComponent,
    ModalDeleteProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
