import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = 'https://localhost:7076/api/account';

  constructor(private http: HttpClient) { }

  login(login: Login) {
    return this.http.post<Login>(`${this.url}/login`, login);
  }
}
