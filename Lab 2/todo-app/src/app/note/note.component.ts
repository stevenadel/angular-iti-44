import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() text: string;
  @Output() delete: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.text = "";
  }

  deleteNote() {
    this.delete.emit(this.text);
  }
}
