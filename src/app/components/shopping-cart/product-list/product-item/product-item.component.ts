import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service';
import { FavlistService } from 'src/app/services/favlist.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  @Input() addedToFavlist: boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private favlistService: FavlistService
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToFavlist(){
    this.favlistService.addToFavlist(this.productItem.id).subscribe(() => {
      this.addedToFavlist = true;
    })
  }

  handleRemoveFromFavlist(){
    this.favlistService.removeFromFavlist(this.productItem.id).subscribe(() =>{
      this.addedToFavlist = false;
    })


}
}