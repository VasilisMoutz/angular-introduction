import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  person = {
    firstname: 'Vasilis',
    surname: 'Moutzouridis',
    age: 26,
    email: 'basilismoutz@gmail.com'
  };
}
