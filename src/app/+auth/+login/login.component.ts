import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' ,
    styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
     '../../../../node_modules/bootstrap-social/bootstrap-social.css',
  '../../../../node_modules/font-awesome/css/font-awesome.css']

 

})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['/'])
  }



}
