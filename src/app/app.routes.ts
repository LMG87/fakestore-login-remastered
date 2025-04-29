import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Products',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/products/product.route'),
  },
  {
    path: 'users',
    title: 'Users',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/users/users.component'),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./pages/auth/login/login.component'),
  },
  {
    path: 'cart',
    title: 'Cart',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/cart/cart.component'),
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
