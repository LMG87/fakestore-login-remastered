import { Component, input } from '@angular/core';
import { User } from '../../interfaces/store.interfaces';

@Component({
  selector: 'app-card-user',
  imports: [],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css',
})
export class CardUserComponent {
  user = input.required<User>();
}
