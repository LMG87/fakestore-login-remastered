import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/store.interfaces';
import { CardUserComponent } from '../../components/card-user/card-user.component';

@Component({
  selector: 'app-users',
  imports: [CardUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export default class UsersComponent {
  userService = inject(UserService);
  users: User[] = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((resp) => {
      this.users = resp;
      console.log(this.users);
    });
  }
}
