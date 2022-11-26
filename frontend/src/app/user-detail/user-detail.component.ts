import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        this.fetchUser(id);
      },
      error: err => console.log(err)
    });
  }
  fetchUser(id: string | null) {
    this.userService.findById(Number(id)).subscribe({
      next: userBackend => this.user = userBackend,
      error: err => console.log(err)
    });
  }

  onDelete(id: number) {
    console.log(id);
    this.userService.delete(id).subscribe({
      next: response => this.navigateToList(),
      error: err => console.log(err)
    });
  }

  private navigateToList() {
    this.router.navigate(["/users"]);
  }
}
