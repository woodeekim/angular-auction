import { Component, OnInit } from '@angular/core';
import {DiProduct, DiProductService, MockProductService} from '../di-services/di-product.service';

@Component({
  selector: 'app-di-product',
  templateUrl: './di-product.component.html',
  styleUrls: ['./di-product.component.scss'],
  providers: [DiProductService]
})
export class DiProductComponent implements OnInit {

  product: DiProduct;

  constructor(productService: DiProductService) {
    this.product = productService.getDiProduct();
  }

  ngOnInit(): void {
  }

}
