import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [CommonModule, PersonCardComponent],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent {

  constructor(private appService: AppService) {}

  @ViewChild('userId') id!: ElementRef<HTMLInputElement>

  user: Person | undefined
  userNotFound = false

  onClick() {
    const id = parseInt(this.id.nativeElement.value);
  
    this.appService.getUserById(id).subscribe({
      next: (user) => {
        this.user = user;
        this.userNotFound = false
      },
      error: (error) => {
        this.user = undefined;
        this.userNotFound = true
        console.log(error)
      },
      complete: () => {
        console.log('Operation Completed')
      }
    })

  }
}
