import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-first-projection-parent',
  template:
    `
    <div class="wrapper">
      <h5>Parent</h5>
      <div >first-projection-parent </div>
        <app-first-projection-child>
            <div>첫번째 부모템플릿에서 자식템플릿으로 보냅니다.</div>
        </app-first-projection-child>
    </div>
  `,
  styles: [`.wrapper { background: coral; }`]
})
export class FirstProjectionParentComponent implements OnInit{


  ngOnInit(): void {

  }

}
