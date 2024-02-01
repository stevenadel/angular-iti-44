import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productItem: any;

  constructor(private route: ActivatedRoute, private dataService: ProductsDataService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dataService.getList().subscribe(data => {
      let products = data.products;
      this.productItem = products.find((product: Product) => product.id == id);
    });
  }

  // Bonus
  getStars(rating: number): Array<number> {
    return Array.from({ length: Math.floor(rating) }, (_, index) => index + 1);
  }

  addToCart(): void {
    this.dataService.addProduct(this.productItem);
  }
}