import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  columnNames: string[] = ['id', 'name', 'email', 'actions'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.userService.findAll().subscribe(
      {
        next: users => this.users = users,
        error: err => console.log(err)
      }
    );
  }

  onDelete(id: number) {
    console.log(id);
    this.userService.deleteById(id).subscribe({
      next: response => this.findAll(),
      error: err => console.log(err)
    });
  }
}
