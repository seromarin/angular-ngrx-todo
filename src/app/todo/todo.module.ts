import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';



@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoItemComponent, TodoFooterComponent, TodoAddComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
