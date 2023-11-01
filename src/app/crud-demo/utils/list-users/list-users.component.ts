import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{

  //Initialise Array
  users: Person[] = []
  //Inject service
  constructor(private service: AppService){}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(users => {
      this.users = users
    })
  }
}
