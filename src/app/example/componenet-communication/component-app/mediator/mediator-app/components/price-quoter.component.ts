import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Stock} from './stock';

@Component({
  selector: 'app-price-quoter',
  template:
      `
    <strong><input type="button" value="구매" (click)="buyStock($event)">
    {{ stockSymbol }}  {{ lastPrice | currency: 'USD': true: '1.2-2' }} </strong>
  `,
  styles: [ `:host { background: #d17581; padding: 5px 15px 15px 15px;}`]
})
export class PriceQuoterSecondComponent implements OnInit {

  @Output() buy: EventEmitter<Stock> = new EventEmitter();
  stockSymbol = 'IBM';
  lastPrice: number;


  /*
    constructor() - ngOnInit()
    - constructor 를 호출하는 주체가 Angular 가 아닌 자바스크립트 엔진이라는 점이 중요하다. 그래서 Agular 에서
      ngOnInit 를 만들었다.
    - ngOninit 는 컴포넌트의 생명주기
    -
  */

  ngOnInit(): void {
    setInterval( () => {
      this.lastPrice = 100 * Math.random();
    }, 2000);
  }


  buyStock($event): void {
    const stockToBuy: Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };

    // @Output() 프로퍼티인 buy 를 컴포넌트 외부로 전달하면 이벤트 바인딩한 (buy)   로 받을 수 있다.
    // - 보내는 모듈과 받는 모듈은 서로 알 필요가 없다. 중개자만 알면 된다.
    this.buy.emit(stockToBuy);
  }
}
