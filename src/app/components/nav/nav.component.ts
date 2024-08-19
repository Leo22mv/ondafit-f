import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentPage: number = 0;

  constructor() { }

  ngOnInit(): void {
    const currentRoute = window.location.pathname
    switch (currentRoute) {
      case "/store":
        this.updateCurrentPage(1);
        break;
      
      case "/auth/login":
        this.updateCurrentPage(4);
        break;
      
      case "/auth/register":
        this.updateCurrentPage(4);
        break;
    }
  }

  updateCurrentPage(page: number) {
    const navLinks = document.getElementsByClassName("nav-link");
    if (this.currentPage == 4) {
      navLinks[this.currentPage].classList.add("login-icon")
      navLinks[this.currentPage].classList.remove("login-icon-active")
    } else {
      navLinks[this.currentPage].classList.remove("active")
    }
    this.currentPage = page;
    if (page == 4) {
      navLinks[this.currentPage].classList.add("login-icon-active")
      navLinks[this.currentPage].classList.remove("login-icon")
    } else {
      navLinks[this.currentPage].classList.add("active")
    }
  }

}
