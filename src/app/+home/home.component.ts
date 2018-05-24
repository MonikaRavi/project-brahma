import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { HomeService } from './home.service';
import { AuthService } from '../+auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  events: MicrosoftGraph.Event[];
  me: MicrosoftGraph.User;
  message: MicrosoftGraph.Message;
  emailSent: Boolean;
  subsGetUsers: Subscription;
  subsGetMe: Subscription;
  subsSendMail: Subscription;
  subsGetPhoto: Subscription;
  user: microsoftgraph.User;



  

  constructor( private homeService: HomeService, private authService: AuthService ) { 
    

  
  }

  ngOnInit() {

    this.subsGetMe = this.homeService.getMe().subscribe(me => this.me = me );
    this.subsGetPhoto = this.homeService.getPhoto().subscribe(user => this.user = user );
    
      }

  ngOnDestroy() {

    this.subsGetMe.unsubscribe();
    this.subsGetPhoto.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {
    this.authService.login();
  }

  getUserName(){

    return this.me.displayName ; 

  }

  getPhoto(){

    //console.log(this.user.photo);
    
    console.log(this.user.photo);

    return this.user.photo;

    
  }

}
