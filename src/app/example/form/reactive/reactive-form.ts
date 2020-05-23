import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.html',
  styles: [],
})
export class ReactiveFormComponent implements OnInit{
  constructor(private formbuilder: FormBuilder) {
  }



  name = new FormControl('');

  // 폼 컨트롤을 그룹으로 묶기
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  // FormBuilder로 컨트롤 생성하기

  profileFormBuilder = this.formbuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formbuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });



  ngOnInit(): void {

  }

  updateName() {
    this.name.setValue('우디');
    // AbstractControl 의 추상클래스? fatch() 를 어떻게 불러오는거지, 일단 실마리는 찾았으니 집에 각자
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.warn(this.profileFormBuilder.value);
  }
}
