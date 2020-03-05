import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ITodoTask from 'src/app/interfaces/todo.interface';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoTask$: Observable<ITodoTask>

  constructor(
    private store: Store<{ todo: ITodoTask }>
  ) { }

  ngOnInit(): void {
    this.todoTask$ = this.store.pipe(select('todo'));
  }

}
