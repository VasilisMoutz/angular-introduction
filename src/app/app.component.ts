import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
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

  person2: Person = {
    firstname: 'Vasilios',
    surname: 'Moutzouridios',
    age: 36,
    email: 'basilismoutzou@gmail.com',
    address: 'Ashfield 97'
  };
}
