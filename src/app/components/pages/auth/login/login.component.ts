import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../../../models/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm = {
    email: "",
    password: ""
  };

  loading: boolean = false;
  requiredInputError: boolean = false;
  invalidUserError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleLoginButton() {
    this.loading = false;
    this.requiredInputError = false;

    if (this.loginForm.email.length >= 1 && this.loginForm.password.length >= 1) {
      this.loading = true;
      const loginButton = document.getElementById("loginButton");
      loginButton?.classList.add("disabled");
      const registerLink = document.getElementById("register-link");
      registerLink?.classList.add("disabled-link");
      const navLinksElements = document.getElementsByClassName("nav-link");
      const navLinks = Array.from(navLinksElements);
      for (let link of navLinks) {
        link.classList.add("disabled")
      }
    } else {
      this.requiredInputError = true;
    }
  }

}
