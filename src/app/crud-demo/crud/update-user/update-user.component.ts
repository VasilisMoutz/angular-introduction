import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { Person } from 'src/app/interfaces/person';
import { CrudUserFormComponent } from '../../utils/crud-user-form/crud-user-form.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, CrudUserSearchComponent, CrudUserFormComponent],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  constructor(
    private service: AppService
  ){}

  @Output() userUpdated = new EventEmitter();
  user: Person | undefined
  onUserFound(user: Person | undefined) {
    this.user = user
    console.log(user)
  }

  onUpdate(user: Person) {
    this.service.updateUser(user).subscribe(user => {
      console.log(user);
      this.userUpdated.emit()
    })
  }
}
