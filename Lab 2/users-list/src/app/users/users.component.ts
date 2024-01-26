import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";
import usersData from "../../assets/users.json"; // Bonus

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [UserComponent]
})
export class UsersComponent {
    users = usersData; // Bonus: Read from JSON
}
