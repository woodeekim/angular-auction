import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-first-projection-child',
  template:
    `
    <div class="wrapper">
        <h5>Child</h5>
        <div>first-projection-child</div>
      <ng-content></ng-content>
    </div>

  `,
  styles: [`.wrapper { background: chocolate;}`],
})
export class FirstProjectionChildComponent implements OnInit{


  ngOnInit(): void {

  }

}
