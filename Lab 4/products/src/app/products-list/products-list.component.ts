import { Component } from '@angular/core';
import productsList from '../../assets/products-list.json';
import { ProductComponent } from "../product/product.component";
import { Product } from '../product';

@Component({
    selector: 'app-products-list',
    standalone: true,
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    imports: [ProductComponent]
})
export class ProductsListComponent {
  products: Array<Product> = productsList;
}
