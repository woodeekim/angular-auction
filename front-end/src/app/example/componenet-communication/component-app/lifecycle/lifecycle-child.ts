import {Component, OnChanges, SimpleChange, Input } from '@angular/core';


interface ChangeInterface {
  [ key: string]: SimpleChange;
}


@Component({
  selector: 'app-lifecycle-child',
  template:
  `
    <div class="child">
      <h3>lifecycle-child</h3>
      <div>Greeting : {{greeting}}</div>
      <div>User name: {{user.name}}</div>
      <div>Message : <input [(ngModel)]="message"></div>
    </div>
  `
  ,
  styles: ['.child { background: lightcoral;}'],

})
export class LifecycleChildComponent implements OnChanges{
  @Input() greeting: string;
  @Input() user;
  message = 'Initial message';

  ngOnChanges(changes: ChangeInterface) {
    console.log(JSON.stringify(changes, null, 2));
  }

}
