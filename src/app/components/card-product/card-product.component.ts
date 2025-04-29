import { Component, input, output } from '@angular/core';
import { Product } from '../../interfaces/store.interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [RouterLink],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  add(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product());
  }
}
