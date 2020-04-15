import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import {FormsModule} from '@angular/forms';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { GreetingComponent } from './greeting/greeting.component';
import { LogDirectiveDirective } from './greeting/directive/log-directive.directive';
import { HighlightDirectiveDirective } from './greeting/background/highlight-directive.directive';
import { BindingComponent } from './greeting/binding/binding.component';



@NgModule({
  declarations: [TodosComponent, TodoComponent, AddTodoComponent, GreetingComponent, LogDirectiveDirective, HighlightDirectiveDirective, BindingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodosComponent, GreetingComponent]
})
export class TodoModule { }
