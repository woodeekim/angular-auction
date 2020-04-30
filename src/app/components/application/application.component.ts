import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Product, ProductService} from '../../services/product.service';

/*
* encapsulation: ViewEncapsulation.None
* - 뷰 캡슐화 정책
*/
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }

}
