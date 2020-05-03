import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-input-property-binding',
  template:
    `
    부모 컴포넌트에서 자식 컴포넌트로 데이터 전달 <strong> quantity:{{ quantity }} , stockSymbol:{{ stockSymbol }} </strong>
  `,
  styles: [
    `:host { background: gold; }`
  ]
})
export class InputPropertyBindingComponent implements OnInit {
  @Input() stockSymbol: string;
  @Input() quantity: number;


  ngOnInit(): void {
  }

}
