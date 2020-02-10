import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: 'clients', loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule), canActivate: [LoginGuard] },
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), canActivate: [LoginGuard] },
  { path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule), canActivate: [LoginGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: '**', redirectTo: '/clients', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
