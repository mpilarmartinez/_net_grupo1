import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  editForm = this.createFormGroup();

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', {nonNullable:true}),
      password: new FormControl('', {nonNullable:true}),
    });
  }

  save() {
    let login = {
      email: this.editForm.get("email")?.value,
      password: this.editForm.get("password")?.value
    } as any;

    this.accountService.login(login).subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    });
  }
}
