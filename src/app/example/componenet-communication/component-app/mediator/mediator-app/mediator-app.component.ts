import { Component, OnInit } from '@angular/core';
import { Stock } from './components/stock';

@Component({
  selector: 'app-mediator-app',
  templateUrl: './mediator-app.component.html',
  styleUrls: ['./mediator-app.component.scss']
})
export class MediatorAppComponent implements OnInit {
  stock: Stock;

  priceQuoteHandler(event: Stock) {
    this.stock = event;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
