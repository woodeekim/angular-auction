import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-projection-child',
  template:
    `
    <div class="child">
      <h5>Child</h5>
      <ng-content select=".header"></ng-content>
      <div>여기는 자식의 중앙입니다.</div>
      <ng-content select=".footer"></ng-content>
    </div>
  `,
  styles: [`.child { background: lightblue;}`]
})
export class SecondProjectionChildComponent implements OnInit{


  ngOnInit(): void {

  }

}
