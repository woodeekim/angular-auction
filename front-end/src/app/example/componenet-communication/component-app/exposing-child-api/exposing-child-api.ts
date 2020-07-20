import {Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exposing-child',
  template:
    `
    <h5>Child</h5>
  `,
  styles: []
})
export class ExposingChildComponent implements OnInit {
  greet(name) {
    console.log('Hello' + name);
  }

  ngOnInit(): void {
  }



}
