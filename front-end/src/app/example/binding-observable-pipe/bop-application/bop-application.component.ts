import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

// HttpModule 은 angular8에서 deprecated 됐다. 대신 HttpClientModule 사용
@Component({
  selector: 'app-bop-application',
  templateUrl: './bop-application.component.html',
  styleUrls: ['./bop-application.component.scss']
})
export class BopApplicationComponent implements OnInit {
  greeting = 'A value';
  flag = true;
  lastStockSymbol;
  searchInput: FormControl = new FormControl('');

  onInputEvent(event: Event): void{
    // <HTMLInputElement> event.target 처럼 화살표 괄호를 안쓰고 as 를 써야한다.
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;

    // `  ` 벡틱 안에다가 문자열과 변수를 같이 사용 가능
    console.log(`1) input property value = ${inputElement.value}`);
    console.log(`2) The input attribute value = ${inputElement.getAttribute('value')}`);
    console.log(`3) The greeting property value = ${this.greeting}`);
  }

  onKey(value: string): any {
    // Event 객체의 target 프로퍼티는 이벤트가 발생한 엘리먼트를 가리킨다.
    // 템플릿 지역 변수는 # 기호로 시작
    // - 템플릿 지역 변수를 사용해서 HTML 엘리먼트나 엘리먼트의 프로퍼티에 바로 접근
    console.log('onKey() : ' + value);
  }
  getStockQuoterFromServer(stock: string) {
    console.log(`The price of ${stock} }`);
  }
  constructor() {
    // debounceTimte() 함수를 사용하려면 pipe() 함수를 열고 안에다가 해야된다. (버전이 달라서 조금 찾았던 부분)
    this.searchInput.valueChanges
      .pipe(debounceTime(500)) // <input> 엘리먼트는 다음 이벤트를 바로 발생시키지 않고 500ms 지연시킴
      .subscribe(stock => this.getStockQuoterFromServer(stock));
  }

  ngOnInit(): void {
  }

}
