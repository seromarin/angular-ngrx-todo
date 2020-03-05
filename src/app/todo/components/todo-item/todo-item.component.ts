import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task;
  @Input() taskIndex;

  constructor() { }

  ngOnInit(): void {
    console.log({ task: this.task });
  }

}
