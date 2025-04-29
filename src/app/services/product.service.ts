import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../interfaces/store.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseHttpService {
  private productsCache = new Map<string, Product[]>();
  private productCache = new Map<string, Product>();

  getProducts(): Observable<Product[]> {
    const key = 'products';
    if (this.productsCache.has(key)) {
      return of(this.productsCache.get(key)!);
    }
    return this.http
      .get<Product[]>(`${this.apiUrl}/products`)
      .pipe(tap((resp) => this.productsCache.set(key, resp)));
  }

  // updateProductCache(product: Product){
  //   this.productsCache.forEach((products)=>{
  //     products.map((p)=>{
  //       p.id === product.id ? product : p
  //     })
  //   })
  // }

  getProduct(id: string): Observable<Product> {
    if (this.productCache.has(id)) {
      return of(this.productCache.get(id)!);
    }
    return this.http
      .get<Product>(`${this.apiUrl}/products/${id}`)
      .pipe(tap((resp) => this.productCache.set(id, resp)));
  }
}
