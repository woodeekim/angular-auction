import { Component, OnInit } from '@angular/core';
import {DiProductService, DiProduct,  MockProductService} from '../di-services/di-product.service';


@Component({
  selector: 'app-di-mock-product',
  templateUrl: './di-mock-product.component.html',
  styleUrls: ['./di-mock-product.component.scss'],
  providers: [{ provide: DiProductService, useClass: MockProductService}]
})
export class DiMockProductComponent implements OnInit {
  product: DiProduct;
  constructor(private diProductService: DiProductService) {
   this.product = diProductService.getDiProduct();
  }

  ngOnInit(): void {
  }

}
