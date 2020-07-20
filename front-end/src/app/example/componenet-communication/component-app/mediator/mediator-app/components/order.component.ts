import {Component, Input, OnInit} from '@angular/core';
import {Stock} from './stock';

@Component({
  selector: 'app-order',
  template:
    `
    {{ massage }}
  `,
  styles: [`:host { background: deepskyblue;}`]
})
export class OrderComponent implements OnInit{
  massage = '주문을 기다리세요..';
  // tslint:disable-next-line:variable-name
  private _stock: Stock;

  @Input() set stock(value: Stock) {
    if ( value && value.bidPrice !== undefined) {
      this.massage = `${value.stockSymbol} \$${value.bidPrice.toFixed(2)}`;
    }
  }

  get stock(): Stock {
    return this._stock;
  }

  ngOnInit(): void {

  }

}
