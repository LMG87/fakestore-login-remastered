import { Component, inject } from '@angular/core';
import { CartProductComponent } from '../../components/cart-product/cart-product.component';
import { CartStateService } from '../../services/cart-state.service';
import { ProductItemCart } from '../../interfaces/store.interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onDecrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity - 1,
    });
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }
}
