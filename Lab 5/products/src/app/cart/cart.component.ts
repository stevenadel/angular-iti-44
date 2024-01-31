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
  totalPrice: number;

  constructor(private dataService: ProductsDataService) {
    this.products = this.cartItems = [];
    this.totalPrice = 0;
  }

  ngOnInit(): void {
    this.dataService.getList().subscribe(data => {
      this.products = data.products;
      this.updateTotalPrice();  
    });

    this.dataService.currentCartItems.subscribe((items) => {
      this.cartItems = items;
    })
  }
  
  updateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, product) => sum + product.price, 0);
  }
}
