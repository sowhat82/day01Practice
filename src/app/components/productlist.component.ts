import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {ITEMLIST} from '../itemList'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  @Output() addItem = new EventEmitter<number>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   itemList = ITEMLIST;


addItemToCart(id: number): void {

  this.addItem.next(id)

    var found = false;
    for(var i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id == id) {
        this.itemList[i].quantity += 1;
        found = true;
        break;
      }
    }
    if (found == false){
      this.itemList.push(this.itemList[id])    
      this.itemList[this.itemList.length-1].quantity += 1
    }

    console.info (ITEMLIST)
}

}
