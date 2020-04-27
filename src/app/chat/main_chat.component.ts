import { Component } from '@angular/core';

@Component({
  selector: 'app-main-chat-component',
  template: `
    <div>
      <a [routerLink]="['']"></a>
      <a [routerLink]="[{ outlets: {primary: 'home', aux: 'chat' }}]">Open Chat</a>
      <a [routerLink]="[{ outlets: {aux: null }}]">Close Chat</a>
    </div>
    <router-outlet></router-outlet>
    <router-outlet name="aux"></router-outlet>
  `,
  styles: [`
  :host {
    float: left;
    width: 100%;
  }
  `]
})
export class MainChatComponent {

}
