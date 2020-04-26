import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

/*
* ActivatedRoute
* - 이전 컴포넌트에서 전달한 인자가 모두 들어 있다.
*/

@Component({
  selector: 'app-product-param',
  templateUrl: './product-param.component.html',
  styleUrls: ['./product-param.component.scss']
})
export class ProductParamComponent implements OnInit {

  productId: string;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
