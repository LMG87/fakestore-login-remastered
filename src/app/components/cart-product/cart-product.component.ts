import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../interfaces/store.interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-product',
  imports: [CurrencyPipe],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css',
})
export class CartProductComponent {
  productCartItem = input.required<ProductItemCart>();

  onRemove = output<number>();
  onIncrease = output<ProductItemCart>();
  onDecrease = output<ProductItemCart>();
}
