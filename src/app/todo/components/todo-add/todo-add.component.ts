import { Component, OnInit, HostListener } from '@angular/core';
import ITodoTask from 'src/app/interfaces/todo.interface';
import { Store } from '@ngrx/store';
import { addTask } from '../../actions/todo.actions';

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
    const newTask = {
      status: false,
      task: this.actualWritingTask,
    };
    this.store.dispatch(addTask(newTask));
    this.actualWritingTask = null;
  }

}
