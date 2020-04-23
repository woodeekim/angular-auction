import { Component, OnInit} from '@angular/core';

@Component({
  selector : 'app-router',
  template : `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product Details</a>
    <router-outlet></router-outlet>
  `
})
export class RouterComponent implements OnInit{
    ngOnInit(): void {
    }

}
