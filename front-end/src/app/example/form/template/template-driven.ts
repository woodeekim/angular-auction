import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  template: `
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value) ">
    <div>
      Username: <input type="text" name="username" name="username" ngModel>
    </div>
    <div>
      SSN: <input type="text" name="ssn" ngModel>
    </div>
    <div ngModelGroup="passwordsGroup">
      Paswword: <input type="password" name="password" ngModel>
    </div>
    <div>
      Confirm password: <input type="password" name="pconfirm" ngModel>
    </div>
    <button type="submit">submit</button>
  </form>
  `,
  styles: [],
})
export class TemplateDrivenComponent implements OnInit{
  ngOnInit(): void {
  }

  onSubmit(formValue: any) {
    console.log(formValue);

  }
}
