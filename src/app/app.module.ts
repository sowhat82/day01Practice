import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { ProductlistComponent } from './components/productlist.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: ProductlistComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'cart', component: CartComponent },
  { path: "**", redirectTo: '/', pathMatch: 'full' },
  ];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductlistComponent
  ],
  exports: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule, RouterModule.forRoot(appRoutes), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
