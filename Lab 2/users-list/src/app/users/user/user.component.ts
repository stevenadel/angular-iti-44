import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() username: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() isVerified: boolean;

  constructor() {
    this.username = "Username";
    this.email = "Email";
    this.phone = "Phone";
    this.isVerified = false;
  }

}
