import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private cartSource: BehaviorSubject<any>;
  currentCartItems: Observable<any>;


  constructor(private http: HttpClient) {
    this.cartSource = new BehaviorSubject([]);
    this.currentCartItems = this.cartSource.asObservable()
  }

  getList(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  addProduct(product: Product): void {
    product.quantity = (product.quantity) ? (product.quantity + 1) : 1;
    this.currentCartItems.pipe(take(1)).subscribe((items) => {
      const newCartItems = [...items, product];
      this.cartSource.next(newCartItems);
      console.log(newCartItems);
    });
  }
  
  getCartSize(): number {
    let length = 0;
    this.currentCartItems.subscribe((items) => {
      length = items.length;
    })
    return length;
  }
}
