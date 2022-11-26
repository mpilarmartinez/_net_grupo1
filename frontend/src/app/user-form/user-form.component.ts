import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  editForm = this.createFormGroup();
  error: boolean = false;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: pmap => {
        let id = pmap.get("id");
        if (id) {
          this.getUserAndLoadForm(id);
        }
      }
    });
  }

  getUserAndLoadForm(id: string) {
    this.userService.findById(Number(id)).subscribe({
      next: userBackend => {
        this.editForm.reset({
          id: { value: userBackend.id, disabled: true },
          name: userBackend.name,
          email:userBackend.email
        } as any);
      },
      error:err=>console.log(err)
    });
  }


  createFormGroup() {
    return new FormGroup({
      id: new FormControl({ value: null, disabled: true }),
      name: new FormControl('', { nonNullable: true }),
      email: new FormControl('', { nonNullable: true })
    });
  }

  save() {
    let user = {
      name: this.editForm.get("name")?.value,
      email: this.editForm.get("email")?.value
    } as any;

    let id = this.editForm.get("id")?.value;
    if (id) {
      user.id = id;

      this.userService.update(user).subscribe({
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
    this.router.navigate(["/sers"]);
  }
}
