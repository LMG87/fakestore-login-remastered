import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    title: 'Products',
    loadComponent: () => import('./product-list/product-list.component'),
  },
  {
    path: 'product/:id',
    title: 'Product Detail',
    loadComponent: () => import('./product-detail/product-detail.component'),
  },
] as Routes;
