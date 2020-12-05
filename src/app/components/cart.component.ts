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

  totalCost = 0
  totalCostComma = ""

  constructor(private router: Router) { }

  //@Input() cart;
  //@Output() onClick = new EventEmitter();
  itemList = ITEMLIST

  ngOnInit(): void {

    for(var i = 0; i < this.itemList.length; i++) {
      this.totalCost += this.itemList[i].quantity * this.itemList[i].price
    }

    this.totalCostComma = this.numberWithCommas(this.totalCost)
  }

  removeItemFromCart(id): void {


    for(var i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id == id) {
        this.itemList[i].quantity -= 1;
        // if (this.itemList[i].quantity == 0) {
        //   this.itemList.splice(i, 1);
        // }
        break;
      }
    }

    // update total cost
    this.totalCost = 0
    
    for(var i = 0; i < this.itemList.length; i++) {
      this.totalCost += this.itemList[i].quantity * this.itemList[i].price
    }

    this.totalCostComma = this.numberWithCommas(this.totalCost)
  }

  // to convert number to comma format
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
