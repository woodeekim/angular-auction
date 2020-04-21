import { Component, OnInit, Input} from '@angular/core';
import StarsComponent from '../../components/stars/stars.component';
import {Product} from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export default class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
