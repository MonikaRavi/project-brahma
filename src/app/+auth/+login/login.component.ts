import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../../../node_modules/bootstrap-social/bootstrap-social.css',
    '../../../../node_modules/font-awesome/css/font-awesome.css',
    './login.component.css']



})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  email : string;

  password: string;

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }

  login(form: NgForm) {
    this.email = form.value.email;

    this.password = form.value.password;

    this.authService.signInEmailPassword(this.email, this.password);

  }



}
