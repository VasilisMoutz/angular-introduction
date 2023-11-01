import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  constructor(
    // private appService: AppService,
    private http: HttpClient
  ){}
  @ViewChild('userId') id!: ElementRef<HTMLInputElement>
  @Output() userDeleted = new EventEmitter();
  user: Person | undefined
  userNotFound = false

  // onClick() {
  //   const id = parseInt(this.id.nativeElement.value);
  //   this.appService.deleteUser(id).subscribe({
  //     next: (user) => {
  //       console.log(user); 
  //       this.userNotFound = false;
  //       this.userDeleted.emit();
  //     },
  //     error: (error) => {
  //       console.log(error)
  //       this.userNotFound = true;
  //     },
  //     complete: () => {'Delete Operation Completed'}
  //   })
  // }
  onClick() {
    const id = parseInt(this.id.nativeElement.value);
    this.http.delete(`http://localhost:3000/users/${id}`).subscribe({
      next: (user) => {
        console.log(user); 
        this.userNotFound = false;
        this.userDeleted.emit();
      },
      error: (error) => {
        console.log(error)
        this.userNotFound = true;
      },
      complete: () => {'Delete Operation Completed'}
    })
  }
}
