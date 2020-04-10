import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { favlistUrl, productsUrl } from '../config/api';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FavlistService {

  constructor(private http: HttpClient) { }

  getFavlist(){
    return this.http.get(favlistUrl).pipe(
      map((result: any[])=> {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }

  addToFavlist(productId){
    return this.http.post(favlistUrl, {cart: { prodcutId: productId }})
  }

removeFromFavlist(productId){
  return this.http.delete(favlistUrl + '/' +  productId )
}
}
