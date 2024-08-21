import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/models/register-form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: RegisterForm = {
    email: "",
    password: null,
    name: "",
    surname: null,
    phone: null
  };

  loading: boolean = false;
  requiredInputError: boolean = false;
  error: any = null;
  registered: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleRegisterButton() {
    this.loading = false;
    this.requiredInputError = false;
    this.error = null;
    this.registered = false;
    
    if (this.registerForm.email.length >= 1
      && this.registerForm.password
      && this.registerForm.name.length >= 1) {
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
      this.authService.register(this.registerForm).subscribe(res => {
        this.loading = false;

        const registerButton = document.getElementById("registerButton");
        registerButton?.classList.remove("disabled");
        const loginLink = document.getElementById("login-link");
        loginLink?.classList.remove("disabled-link");
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

        this.registered = true;
      }, err => {
        this.loading = false;

        const registerButton = document.getElementById("registerButton");
        registerButton?.classList.remove("disabled");
        const loginLink = document.getElementById("login-link");
        loginLink?.classList.remove("disabled-link");
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

        this.error = err;
      })
    } else {
      this.requiredInputError = true;
    }
  }

}
