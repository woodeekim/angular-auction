import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bop-application',
  templateUrl: './bop-application.component.html',
  styleUrls: ['./bop-application.component.scss']
})
export class BopApplicationComponent implements OnInit {
  greeting = 'A value';
  flag = true;
  lastStockSymbol;

  onInputEvent(event: Event): void{
    // <HTMLInputElement> event.target 처럼 화살표 괄호를 안쓰고 as 를 써야한다.
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;

    // `  ` 벡틱 안에다가 문자열과 변수를 같이 사용 가능
    console.log(`1) input property value = ${inputElement.value}`);
    console.log(`2) The input attribute value = ${inputElement.getAttribute('value')}`);
    console.log(`3) The greeting property value = ${this.greeting}`);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
