import { Component, OnInit } from '@angular/core';
import {IPriceQuote} from './io-property/output-property-binding';

@Component({
  selector: 'app-component-app',
  templateUrl: './component-app.component.html',
  styleUrls: ['./component-app.component.scss']
})
export class ComponentAppComponent implements OnInit {
  stock: string;
  price: number;
  stockSymbol: string;

  constructor() { }

  ngOnInit(): void {
  }

  onInputEvent( {target} ): void {
    this.stock = target.value;
  }

  priceQuoteHandler(event: IPriceQuote) {
    this.stockSymbol = event.stockSymbol;
    this.price = event.lastPrice;
  }
}
