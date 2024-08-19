import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { StoreComponent } from './components/pages/store/store.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';

const routes: Routes = [
  { path: "auth", children: [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
  ] },
  { path: "store", component: StoreComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
