import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface IPriceQuote {
  stockSymbol: string;
  lastPrice: number;
}

@Component({
  selector: 'app-output-property-binding',
  template:
    `
    <strong> stockSymbol : {{ stockSymbol }}   {{ price | currency: 'USC ': true:'1.2-2'}}</strong>
  `,
  styles: [
    `:host{ background: #d17581;}`
  ]
})
export class PriceQuoterComponent implements OnInit {
  @Output() lastPrice: EventEmitter<IPriceQuote> = new EventEmitter();

  stockSymbol = 'IBM';
  price: number;

  constructor() {
    setInterval(() => {
      const priceQuote: IPriceQuote = {
        stockSymbol: this.stockSymbol,
        // lastPrice: 100 * Math.random()
        lastPrice: 0
      };

      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
  }

  ngOnInit(): void {
  }

}
