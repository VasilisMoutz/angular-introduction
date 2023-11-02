import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-crud-user-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css']
})
export class CrudUserSearchComponent {

  constructor(private appService: AppService) {}

  @ViewChild('userId') id!: ElementRef<HTMLInputElement>
  @Output() userFound = new EventEmitter<Person | undefined>

  user: Person | undefined
  userNotFound = false

  onSearch() {
    const id = parseInt(this.id.nativeElement.value);
  
    this.appService.getUserById(id).subscribe({
      next: (user) => {
        this.user = user;
        this.userNotFound = false;
        this.userFound.emit(this.user);
      },
      error: (error) => {
        this.user = undefined;
        this.userNotFound = true;
        console.log(error);
        this.userFound.emit(this.user);
      },
      complete: () => {
        console.log('Operation Completed')
      }
    })
  }
}
