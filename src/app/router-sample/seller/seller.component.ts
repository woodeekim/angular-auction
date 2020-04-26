import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//  styles: [':host { backgroud-color: yellow }'],
@Component({
  selector: 'app-seller',
  template: 'The seller of this product is Mary Lou (98%)',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.params.id;
    console.log('The SellerInfoComponent got the seller id ${this.sellerId}');
  }

  ngOnInit(): void {
  }

}
