import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/models/register-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: RegisterForm = {
    email: "",
    password: "",
    name: "",
    surname: ""
  };

  loading: boolean = false;
  requiredInputError: boolean = false;
  invalidUserError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleRegisterButton() {
    this.loading = false;
    this.requiredInputError = false;
    
    if (this.registerForm.email.length >= 1
      && this.registerForm.password.length >= 1
      && this.registerForm.name.length >= 1
      && this.registerForm.surname.length >= 1) {
      this.loading = true;
      const registerButton = document.getElementById("registerButton");
      registerButton?.classList.add("disabled");
      const loginLink = document.getElementById("login-link");
      loginLink?.classList.add("disabled-link");
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
