import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
