import ITodoTask from '../interfaces/todo.interface';

export class Todo implements ITodoTask{
  task: string;
  status: boolean;

  constructor(task: string) {
    this.task = task;
    this.status = false;
  }

}
