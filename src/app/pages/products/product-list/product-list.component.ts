import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/store.interfaces';
import { CardProductComponent } from '../../../components/card-product/card-product.component';
import { CartStateService } from '../../../services/cart-state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  imports: [CardProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent {
  productService = inject(ProductService);
  cartState = inject(CartStateService).state;
  products: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      console.log(this.products);
    });
  }

  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto añadido al carrito',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
