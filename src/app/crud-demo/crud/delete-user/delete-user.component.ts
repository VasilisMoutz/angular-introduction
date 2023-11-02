import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { DangerConfirmComponent } from '../../utils/danger-confirm/danger-confirm.component';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule, CrudUserSearchComponent, PersonCardComponent, DangerConfirmComponent],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  constructor(
    private service: AppService
  ){}

  user: Person | undefined
  userNotFound = false
  @Output() userDeleted = new EventEmitter();
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>;

  onUserFound(user: Person | undefined) {
    if (user) {
      this.user = user
    }
  }

  onConfirm(confirmation: boolean) {
    if (confirmation && this.user) {
      const id = this.user.id ?? -1

      this.service.deleteUser(id).subscribe({
        next: (user) => {
          console.log(user);
          this.userNotFound = false;
          this.userDeleted.emit();
        },
        error: (error) => {
          console.log(error);
          this.userNotFound = true;
        },
        complete: () => {
          "Delete operation completed"
        }
      })
    } else {
      this.user = undefined;
    }

  }
}
