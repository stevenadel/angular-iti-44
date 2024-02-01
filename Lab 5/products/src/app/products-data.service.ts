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
    this.currentCartItems.pipe(take(1)).subscribe((items) => {
      if (product.stock > 0) {
        const productIndex = items.findIndex((item: { id: number; }) => item.id === product.id);
        if (productIndex !== -1) {
          items[productIndex].quantity += 1;
        } else {
          product.quantity = 1;
          const newCartItems = [...items, product];
          this.cartSource.next(newCartItems);
        }
        product.stock--;
      }
    });
  }
  
  removeProduct(product: Product): void {
    const currentItems = this.cartSource.getValue();
    const index = currentItems.findIndex((item: Product) => item.id === product.id);

    if (index !== -1) {
      currentItems.splice(index, 1);
      this.cartSource.next([...currentItems]);
    }
  }

  getCartSize(): number {
    let length = 0;
    this.currentCartItems.subscribe((items) => {
      length = items.length;
    })
    return length;
  }
}
