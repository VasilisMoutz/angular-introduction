import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Vasilis";
  lastname = "Moutzouridios";

  person = {
    firstname: 'Vasilis',
    surname: 'Moutzouridis',
    age: 26,
    email: 'basilismoutz@gmail.com'
  };
}
