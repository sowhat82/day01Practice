import { Component } from '@angular/core';
import {ITEMLIST} from './itemList'
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Shopping Addiction Satisfier';
  cart = ITEMLIST;

  addItem($event: number){
    console.info('item id received in parent: ', $event)
    const id = $event

   this.cart[id].quantity += 1

    var found = false;
    for(var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == id) {
        this.cart[i].quantity += 1;
        found = true;
        break;
      }
    }
    if (found == false){

      this.cart.push(this.cart[id])    
      this.cart[this.cart.length-1].quantity += 1
    }    

  }
// addItemToCart(id): void {
// //    this.itemList[id].quantity += 1

//     var found = false;
//     for(var i = 0; i < this.cart.length; i++) {
//       if (this.cart[i].id == id) {
//         this.cart[i].quantity += 1;
//         found = true;
//         break;
//       }
//     }
//     if (found == false){

//       this.cart.push(this.itemList[id])    
//       this.cart[this.cart.length-1].quantity += 1
//     }

// }


}
