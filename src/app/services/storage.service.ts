import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductItemCart } from '../interfaces/store.interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  loadProducts(): Observable<ProductItemCart[]> {
    const rawProduct = localStorage.getItem('products');
    return of(rawProduct ? JSON.parse(rawProduct) : []);
  }

  saveProducts(products: ProductItemCart[]): void {
    localStorage.setItem('prodcuts', JSON.stringify(products));
  }
}
