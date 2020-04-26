import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.scss']
})
export class ProductChildComponent implements OnInit {

  productId: string;
  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
