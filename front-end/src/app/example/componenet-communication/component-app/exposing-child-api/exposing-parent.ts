import {Component, Input, AfterViewInit, ViewChild} from '@angular/core';
import {ExposingChildComponent} from './exposing-child-api';


@Component({
  selector: 'app-exposing-parent',
  template:
    `
    <h4>Parent</h4>
    <app-exposing-child #child1></app-exposing-child>
    <app-exposing-child #child2></app-exposing-child>
    <button (click)="child2.greet('Child2')">부모에서직접호출</button>
  `,
  styles: []
})
export class ExposingParentComponent implements AfterViewInit {
  @ViewChild('child1')
  firstChild: ExposingChildComponent;

  ngAfterViewInit(): void {
  }

}
