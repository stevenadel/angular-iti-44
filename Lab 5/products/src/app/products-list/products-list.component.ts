import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../product';
import { ProductsDataService } from '../products-data.service';

@Component({
    selector: 'app-products-list',
    standalone: true,
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    imports: [ProductComponent]
})
export class ProductsListComponent {
  products: Array<Product>;

  constructor(private dataService: ProductsDataService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.dataService.getList().subscribe(data => {
      this.products = data.products;
    });
  }
}
