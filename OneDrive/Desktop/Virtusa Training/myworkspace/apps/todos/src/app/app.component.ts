import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@myworkspace/data';

// interface Todo {
//   title: string;
// }

@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
