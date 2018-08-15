import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from "../user.service";
import {LayoutService} from "../../layout/layout.service";
import { HomeService } from '../../../+home/home.service';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { AuthService } from '../+auth/auth.service';

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
})
export class LoginInfoComponent implements OnInit , OnDestroy {

  events: MicrosoftGraph.Event[];
  user: MicrosoftGraph.User;
  message: MicrosoftGraph.Message;
  emailSent: Boolean;
  subsGetUsers: Subscription;
  subsGetMe: Subscription;
  subsSendMail: Subscription;

 

  constructor(
    private userService: UserService,
              private layoutService: LayoutService,
            private homeService: HomeService) {
  }

  /*
  ngOnInit() {
    this.userService.getLoginInfo().subscribe(user => {
      this.user = user
    })

  }*/

  ngOnInit() {

    this.subsGetMe = this.homeService.getMe().subscribe(user => this.user = user );
    
      }

  ngOnDestroy() {

    this.subsGetMe.unsubscribe();
  }

  toggleShortcut() {


    this.layoutService.onShortcutToggle()
  }


  getUserName(){

    return this.user.displayName ; 

    

  }

  getUserPic(){

    //console.log(this.user.photo);
    return this.homeService.getImageFromService()

  }

}
