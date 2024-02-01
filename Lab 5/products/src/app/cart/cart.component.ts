import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: Array<Product>;
  cartItems: Array<Product>;

  constructor(private dataService: ProductsDataService) {
    this.products = this.cartItems = [];
  }

  ngOnInit() {
    this.dataService.getList().subscribe(data => {
      this.products = data.products;
    });

    this.dataService.currentCartItems.subscribe((items) => {
      this.cartItems = items;
    })
  }

  increaseQuantity(product: Product): void {
    this.dataService.addProduct(product);
  }

  decreaseQuantity(product: Product): void {
    product.quantity > 1 ? product.quantity-- : this.removeProduct(product);
  }

  removeProduct(product: Product): void {
    this.dataService.removeProduct(product);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  }
}
