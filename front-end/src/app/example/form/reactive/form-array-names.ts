import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-form-array-names',
  template: `
    <div formArrayName="aliases">
      <h3>Aliases</h3> <button (click)="addAlias()">Add Alias</button>

      <div *ngFor="let alias of aliases.controls; let i=index">
        <!-- alias 폼 배열이 반복되는 부분 -->
        <label>
          Alias:
          <input type="text" [formControlName]="i">
        </label>
      </div>
    </div>
  `,
  styles: [],
})
export class FormArrayNamesComponent{

  constructor(private fb: FormBuilder) {
  }
  formModel: FormGroup = new FormGroup({
    emails : new FormArray([
      new FormControl()
    ])
  });

  // Angular 공식 가이드를 보고 폼 컨트롤을 직접 생성하는 방식과 폼 빌더를 사용하는 방식의 차이를 보니
  // 폼 빌더를 사용하면 코드의 양이 효율적으로 줄어든다.
  profileFormFirst = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileFormFirst.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  addEmail() {
    const emalis = this.formModel.get('emails');
  }
}
