import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {ITEMLIST} from '../itemList';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor() { }

  @Input() cart;
  @Output() onClick = new EventEmitter();
  itemList = ITEMLIST

  ngOnInit(): void {

    
  }

  removeItemFromCart(id): void {

//    console.info(this.cart)

    for(var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == id) {
        this.cart[i].quantity -= 1;
        if (this.cart[i].quantity == 0) {
          this.cart.splice(i, 1);
        }
        break;
      }
    }

  }
}
