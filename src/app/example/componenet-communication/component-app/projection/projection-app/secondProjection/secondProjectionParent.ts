import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-projection-parent',
  template:
    `
    <div class="app">
        <h5>Parent</h5>
        <div>second-projection-parent</div>
        <app-second-projection-child>
          <div class="header">부모에서 자식으로 보냅니다. 그중에서도 이건 Header 입니다. {{ todaysDate }} </div>
          <div class="footer">부모에서 자식으로 보냅니다. 그중에서도 이건 Footer 입니다. </div>
        </app-second-projection-child>
    </div>
  `,
  styles: [`.app { background: cyan;}`]
})
export class SecondProjectionParentComponent implements OnInit{
  todaysDate = new Date().toLocaleDateString();

  ngOnInit(): void {

  }

}
