import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  template: `
    <label>
      Name:
      <input type="text" [formControl]="name">
    </label>
    <p>
      Value: {{ name.value}}
    </p>
    <p>
      <button (click)="updateName()">update</button>
    </p>

    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">

      <label>
        First Name:
        <input type="text" formControlName="firstName">
      </label>

      <label>
        Last Name:
        <input type="text" formControlName="lastName">
      </label>

      <button type="submit" [disabled]="!profileForm.valid">submit</button>
    </form>

  `,
  styles: [],
})
export class ReactiveFormComponent implements OnInit{

  name = new FormControl('');

  // 폼 컨트롤을 그룹으로 묶기
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {

  }

  updateName() {
    this.name.setValue('우디');
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
