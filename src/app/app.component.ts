import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Vasilis";
  lastname = "Moutzouridios";

  person: Person = {
    firstname: 'Vasilis',
    surname: 'Moutzouridis',
    age: 26,
    email: 'basilismoutz@gmail.com',
    address: 'Volanaki 3'
  };
}
