import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../models/register-form';
import { LoginForm } from '../models/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri: string = 'https://ondafit-b-zmjp.onrender.com/auth';

  constructor(private http: HttpClient) { }

  register(req: RegisterForm) {
    return this.http.post(this.uri + "/register", req);
  }

  // edit(id: number, userDetails: RegisterForm) {
  //   return this.http.put(this.uri + "", userDetails);
  // }

  login(req: LoginForm) {
    return this.http.post(this.uri + "/login", req)
  }

  // logout() {
  //   localStorage.removeItem("user_id");
  //   localStorage.removeItem("Username");
  //   localStorage.removeItem("Admin");
  // }
}
