import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productItem!: Product;

  constructor(private router: Router, private dataService: ProductsDataService) {}

  viewProduct(): void {
    this.router.navigate(['/product-details' , this.productItem.id ]);
  }

  addToCart(): void {
    if (this.productItem.stock > 0) {
      this.dataService.addProduct(this.productItem);
    }
  }
}
