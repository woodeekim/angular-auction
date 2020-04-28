import { Component, OnInit} from '@angular/core';

@Component({
  selector : 'app-router',
  template : `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product',1234]">  Product Details</a>
    <a [routerLink]="['/luxury']">  Luxury Items</a>
    <router-outlet></router-outlet>
  `
})
export class RouterComponent implements OnInit{
    ngOnInit(): void {
    }

}
