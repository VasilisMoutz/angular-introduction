import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<Person[]>('http://localhost:3000/users')
  }

  getUserById(id:number) {
    return this.http.get<Person>(`http://localhost:3000/users/${id}`)
  }

  addUser(user: Person) {
    return this.http.post<Person>('http://localhost:3000/users', user)
  }

  deleteUser(id:number) {
    return this.http.delete<Person>(`http://localhost:3000/users/${id}`)
  }

  updateUser(user: Person) {
    console.log(user)
    return this.http.put<Person>(`http://localhost:3000/users/${user.id}`, user)
  }
}

