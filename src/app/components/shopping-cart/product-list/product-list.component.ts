import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { FavlistService } from 'src/app/services/favlist.service';
import { productsUrl } from 'src/app/config/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  favlist: number[] = []

  constructor(
    private productService: ProductService,
    private favlistService: FavlistService
    ) { }

  ngOnInit(): void {
   this.loadProducts();
   this.loadFavlist();
  }
  
  loadProducts(){
     this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      
    })
  }

  loadFavlist(){
    this.favlistService.getFavlist().subscribe(productsIds => {
      console.log(productsIds)
      this.favlist = productsIds
  })
}
}