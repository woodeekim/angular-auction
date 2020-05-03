import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-input-property-getter-setter-binding',
  template:
    `
    부모 컴포넌트에서 자식 컴포넌트로 데이터 전달 <strong> quantity:{{ quantity }} stockSymbol:{{ stockSymbol }} </strong>
  `,
  styles: [
    `:host { background: deepskyblue; }`
  ]
})
export class InputPropertyBindingGetterSetterComponent implements OnInit {
  private _stockSymbol: string;
  @Input() quantity: number;

  @Input()
  set stockSymbol(value: string) {
    this._stockSymbol = value;
    if (this._stockSymbol !== undefined) {
      console.log(`stockSymbol : ${this.stockSymbol}  quantity : ${this.quantity}`);
    }
  }

  get stockSymbol(): string {
    return this._stockSymbol;
  }

  ngOnInit(): void {
  }

}
