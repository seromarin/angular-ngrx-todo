import { Component, OnInit, HostListener } from '@angular/core';
import ITodoTask from 'src/app/interfaces/todo.interface';
import { Store } from '@ngrx/store';
import { addTask } from '../../actions/todo.actions';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  actualWritingTask: string;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {  this.addTask(); }
  }

  constructor(
    private store: Store<{ todo: ITodoTask }>
  ) { }

  ngOnInit(): void { }

  addTask() {
    const newTask = new Todo(this.actualWritingTask);
    this.store.dispatch(addTask(newTask));
    this.actualWritingTask = null;
  }

}
