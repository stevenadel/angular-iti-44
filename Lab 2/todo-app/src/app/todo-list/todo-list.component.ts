import { Component } from '@angular/core';
import { NoteComponent } from "../note/note.component";

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
    imports: [NoteComponent]
})
export class TodoListComponent {
  notes: Array<any>;

  constructor() {
    this.notes = [{text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, voluptatem a minima totam quam, in ipsum perferendis veniam est quaerat."}, {text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, ex?"} , {text: "amazing great good job"}];
  }

  deleteNote(text: string) {
    this.notes = this.notes.filter((note) => note.text != text)
  }
}
