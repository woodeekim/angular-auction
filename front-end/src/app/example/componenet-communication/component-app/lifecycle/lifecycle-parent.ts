import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-parent',
  template:
  `
    <div class="parent">
      <h3>lifecycle-parent</h3>
      <div>Greeting : <input type="text" [value]="greeting" (input)='greeting=$event.target.value' /></div>
      <div>User name : <input type="text" [value]="user.name" (input)='user.name=$event.target.value'/></div>
      <app-lifecycle-child [greeting]="greeting" [user]="user"></app-lifecycle-child>
    </div>
  `
  ,
  styles: ['.parent { background: lightblue;}'],

})
export class LifecycleParentComponent implements OnInit{
  greeting = 'Hello';
  user = { name: 'Keunkyeong' };

  ngOnInit(): void {
  }

  InputGreeting(event){
   const greetingValue = event.target.value;
   console.log(greetingValue);

  }

  InputUser(event) {
    const userValue = event.target.value;
    console.log(userValue);
  }
}
