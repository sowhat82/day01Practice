import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import {ITEMLIST} from '../itemList';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private router: Router) { }

  //@Input() cart;
  //@Output() onClick = new EventEmitter();
  itemList = ITEMLIST

  ngOnInit(): void {

    
  }

  removeItemFromCart(id): void {

//    console.info(this.cart)

    for(var i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id == id) {
        this.itemList[i].quantity -= 1;
        if (this.itemList[i].quantity == 0) {
          this.itemList.splice(i, 1);
        }
        break;
      }
    }
  }
}
