import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { TableProductsComponent } from 'src/app/components/table-products/table-products.component';
import { RowProductComponent } from 'src/app/components/row-product/row-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    TableProductsComponent,
    RowProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
