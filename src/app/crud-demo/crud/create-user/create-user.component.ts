import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { CrudUserFormComponent } from '../../utils/crud-user-form/crud-user-form.component';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, CrudUserFormComponent],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  @Output() userCreated = new EventEmitter();

  constructor(private appService: AppService) {}

  onUser(user: Person) {
    this.appService.addUser(user).subscribe(user => {
      console.log(user);
      this.userCreated.emit()
    })
  }
}
