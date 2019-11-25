import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../auth/auth.service";
import { TokenStorageService } from "../auth/token-storage.service";
import { MatDialog } from "@angular/material/dialog";
import { EmailDialogComponent } from "../shared/email-dialog/email-dialog.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  isLoggedIn = false;
  isLoginFailed = false;
  isLoading = false;

  errorMessage = "";
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  forgotPassword() {
    // const dialogRef = this.dialog.open(EmailDialogComponent, {
    //   width: "400px"
    // });

    // dialogRef.afterClosed().subscribe(r => console.log(r));
    this.router.navigate(["forgot-password"]);
  }

  onSubmit() {
    // console.log(this.form);
    const loginFormValues = this.loginForm.value;
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: loginFormValues.email,
      password: loginFormValues.password
      // username: this.loginForm.controls.username.value,
      // password: this.loginForm.controls.password.value
    };

    // this.loginInfo = new AuthLoginInfo(this.form.username, this.form.password);
    this.isLoading = true;
    this.authService.attemptAuth(loginPayload);
    this.authService.isLoggedIn.subscribe(loggedIn => {
      if(!loggedIn){
        this.isLoginFailed = true;
      }
    })
    // this.router.navigate(["home"]);
  }

  // reloadPage() {
  //   window.location.reload();
  // }
}
