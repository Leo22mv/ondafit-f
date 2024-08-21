import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../../../models/login-form';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

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
  logged: boolean = false;
  error: any = null;

  constructor(private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  handleLoginButton() {
    this.loading = false;
    this.requiredInputError = false;
    this.error = null;
    this.logged = false;

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
      const inputsElements = document.getElementsByClassName("form-control");
      const inputs = Array.from(inputsElements) as HTMLInputElement[];
      for (let input of inputs) {
        input.disabled = true;
      }

      this.authService.login(this.loginForm).subscribe(res => {
        this.loading = false
        this.logged = true;

        const loginButton = document.getElementById("loginButton");
        loginButton?.classList.remove("disabled");
        const registerLink = document.getElementById("register-link");
        registerLink?.classList.remove("disabled-link");
        const navLinksElements = document.getElementsByClassName("nav-link");
        const navLinks = Array.from(navLinksElements);
        for (let link of navLinks) {
          link.classList.remove("disabled")
        }
        const inputsElements = document.getElementsByClassName("form-control");
        const inputs = Array.from(inputsElements) as HTMLInputElement[];
        for (let input of inputs) {
          input.disabled = false;
        }

        // this.cookieService.set('id', res.toString(), { expires: 1, path: '/'});
      }, err => {
        this.error = err;
        console.log(this.error)
        this.loading = false;
        const loginButton = document.getElementById("loginButton");
        loginButton?.classList.remove("disabled");
        const registerLink = document.getElementById("register-link");
        registerLink?.classList.remove("disabled-link");
        const navLinksElements = document.getElementsByClassName("nav-link");
        const navLinks = Array.from(navLinksElements);
        navLinks.forEach((link, index) => {
          if (index != 2 && index != 3) {
            link.classList.remove('disabled');
          }
        });
        const inputsElements = document.getElementsByClassName("form-control");
        const inputs = Array.from(inputsElements) as HTMLInputElement[];
        for (let input of inputs) {
          input.disabled = false;
        }
      });
    } else {
      this.requiredInputError = true;
    }
  }

}
