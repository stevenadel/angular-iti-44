import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productItem!: Product;

  constructor( private router: Router) {}

  viewProduct() {
    this.router.navigate(['/product-details' , this.productItem.id ]);
  }
}
