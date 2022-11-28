import { Injectable } from '@angular/core';
import { Todo } from "./models/todo.todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }
}

export async function getTodos(): Promise<Todo[]> {
  return await (await fetch('http://localhost:3000/todos')).json()
}
