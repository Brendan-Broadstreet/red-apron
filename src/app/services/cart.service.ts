import { Injectable } from '@angular/core';
import { CartItem, CartItemCreate } from '../models/cart-item';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  httpOptions =
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });

  getCartItems(): Observable<CartItem[]> {
    // todo: Mappping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        // tslint:disable-next-line:prefer-const
        let cartItems: CartItem[] = [];

        // tslint:disable-next-line:prefer-const
        for (let item of result) {
          let productExists = false;
          // tslint:disable-next-line:prefer-const
          for (let i of result) {
            if (i.productId === item.productId) {
              i.qty++;
              productExists = true;
              break;
            }
          }
          if (productExists) {
            cartItems.push(new CartItem(item.id, item, 1));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    let newCart = new CartItemCreate(product);
    return this.http.post(cartUrl, { productId: newCart.productId, productName: newCart.productName, qty: newCart.qty, price: newCart.price }, { headers: this.httpOptions });
  }

  deleteProduct(cartItem) {
    return this.http.delete(`${cartUrl}` + `${cartItem}`, { headers: this.httpOptions })
  }

}
