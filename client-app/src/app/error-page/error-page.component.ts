import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.snackbar.open('An unknown error occurred. Please try again later.', 'close', {duration:3000, panelClass:["delete"]});
    this.router.navigate(["home/dashboard"]);
  }

}
