import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.todo';
import { getTodos } from 'src/app/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  myTodos!: Todo[];

  constructor() { }

  ngOnInit(): void {
    getTodos().then(todos => {
      console.log(todos);
      this.myTodos = todos;
      this.completa();
      console.log(this.myTodos);

    });
  }

  completa() {
    this.myTodos = this.myTodos.map(element => {
      return { ...element, completed: true }
    });
  }
}

