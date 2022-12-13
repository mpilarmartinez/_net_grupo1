import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User | undefined;
  editForm = this.createFormGroup();
  error: boolean = false;
  users: User[] = [];

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        if (id) {
          this.getUserAndLoadForm(id);
          this.fetchUser(id);
        }
      }
    });

    this.userService.findAll().subscribe({
      next: users => this.users = users,
      error: err => console.log(err)
    });
  }

  fetchUser(id: string | null) {
    this.userService.findById(Number(id)).subscribe({
      next: userBackend => this.user = userBackend,
      error: err => console.log(err)
    });
  }

  getUserAndLoadForm(id: string) {
    this.userService.findById(Number(id)).subscribe({
      next: userBackend => {
        this.editForm.reset({
          id: { value: userBackend.id, disabled: true },
          name: userBackend.name,
          email: userBackend.email,
          permissions: userBackend.permissions
        } as any);
      },
      error: err => console.log(err)
    });
  }


  createFormGroup() {
    return new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      name: new FormControl('', { nonNullable: true }),
      email: new FormControl('', { nonNullable: true }),
      permissions: new FormControl('', { nonNullable: true })
    });
  }

  save() {
    let user = {
      name: this.editForm.get("name")?.value,
      email: this.editForm.get("email")?.value,
      permissions: this.editForm.get("permissions")?.value
    } as any;

    let id = this.editForm.get("id")?.value;
    if (id) {
      user.id = id;

      this.userService.update(user).subscribe({
        next: response => this.navigateToList(),
        error: err => this.showError(err)
      });
    } else {
      this.userService.create(user).subscribe({
        next: response => this.navigateToList(),
        error: err => this.showError(err)
      });
    }
  }

  private showError(err: any): void {
    console.log(err);
    this.error = true;
  }

  private navigateToList() {
    this.router.navigate(["/users"]);
  }
}
