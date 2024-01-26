import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoFormComponent, TodoListComponent]
})
export class AppComponent {
  title = 'todo-app';
}
