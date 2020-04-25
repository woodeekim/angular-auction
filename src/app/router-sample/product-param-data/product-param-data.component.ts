import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-param-data',
  templateUrl: './product-param-data.component.html',
  styleUrls: ['./product-param-data.component.scss']
})
export class ProductParamDataComponent implements OnInit {

  productId: string;
  isProdEnvironment: string;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.params.id;
    this.isProdEnvironment = route.snapshot.data[0].isProd;
    console.log('this.isProdEnvironment : ' + this.isProdEnvironment);
  }

  ngOnInit(): void {
  }

}
