import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://localhost:7076/api/users';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<User[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  create(user: User) {
    return this.http.post<User>(this.url, user);
  }

  update(user: User) {
    return this.http.put<User>(this.url, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
