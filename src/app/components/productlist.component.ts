import { Component, OnInit } from '@angular/core';
import {ITEMLIST} from '../itemList'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemList = ITEMLIST;
  cart = []

addItemToCart(id): void {
    var found = false;
    for(var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == id) {
        this.cart[i].quantity += 1;
        found = true;
        break;
      }
    }
    if (found == false){
      this.cart.push(this.itemList[id])    
      this.cart[this.cart.length-1].quantity += 1
    }

}

}
