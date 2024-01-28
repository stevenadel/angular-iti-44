import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsList from '../../assets/products-list.json'

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productItem: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.productItem = productsList.find((product) => product.id == id);
  }

  // Bonus
  getStars(rating: number) {
    return Array.from({ length: Math.floor(rating) }, (_, index) => index + 1);
  }
}