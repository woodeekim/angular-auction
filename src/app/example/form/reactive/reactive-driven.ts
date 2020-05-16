import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-reactive-driven',
  template: `
  <form [formGroup]="formModel">
    <div formGroupName="dateRange">
      <input type="date" formControlName="from">
      <input type="date" formControlName="to">
    </div>
  </form>
  <div>
    <ul>
    말이 너무 어려운데 조금 정리해서 남겨보자면
      <li> div 엘리먼트 안에 formGroupName 은 디렉티브다. </li>
      <ul>
        <li>추가로 *Name인 디렉티브는 어트리뷰트에 대괄호를 생략하고 짧게 바인딩하는 방법을 택했다고 한다.</li>
        <li>원래는 [formGroup]="'dateRange'" </li>
      </ul>
      <li> div 엘리먼트 안에 대괄호로 있는 [formGroup] 은 Angular 에서 제공하는 어트리뷰트다. </li>
      <li> Angular 에서 제공하는 어트리뷰트의 값은 컴포넌트 클래스 안에 있는 변수(프로퍼티) 를 선언한 것이다.</li>
    </ul>
  </div>
  `,
  styles: [],
})
export class ReactiveDrivenComponent implements OnInit{

  formModel: FormGroup = new FormGroup({
    dateRange : new FormGroup({
      from : new FormControl(),
      to : new FormControl()
    })
  });
  ngOnInit(): void {

  }
}
