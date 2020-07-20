import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
  `,
  styles: [`
  :host {
    display: block;
    padding: 16px 16px 16px 10px;
    background-color: white;
  }

    input {
      display: inline-block;
      font-size: 18px;
      border: none;
    }

    input:focus, button:focus {
      outline: none;
    }

    button {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: darkgray;
    }

  `]
})

export class AddTodoComponent implements OnInit {

  @Output() onTodoAdd = new EventEmitter();
  newText: string;
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(newText: string) {
    this.onTodoAdd.emit(newText);
    this.newText = '';
  }

}
