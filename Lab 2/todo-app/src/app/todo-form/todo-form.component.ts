import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  text: string = '';

  getText(event: any) {
    // Get the text to be added as a note in TodoList
    this.text = event.target.value;

    // Should use a shared service to send to the other sibling component but not covered yet in course
  }
}
