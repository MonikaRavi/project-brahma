import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "../user.service";
import { LayoutService } from "../../layout/layout.service";
import { HomeService } from '../../../+home/home.service';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { AuthService } from '../+auth/auth.service';

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
})
export class LoginInfoComponent implements OnInit, OnDestroy {

  events: MicrosoftGraph.Event[];
  user: MicrosoftGraph.User;
  message: MicrosoftGraph.Message;
  emailSent: Boolean;
  subsGetUsers: Subscription;
  subsGetMe: Subscription;
  subsSendMail: Subscription;

  userPic;

  isLoggedIn = false;

  isUserEmailLogIn : boolean = false;

  constructor(

    private layoutService: LayoutService,
    private homeService: HomeService) {


      if(this.homeService.isMicrosoftLogin()){

        this.homeService.getImageFromService();

        this.subsGetMe = this.homeService.getMe().subscribe(user => {
    
          this.user = user;
    
          this.isLoggedIn = this.homeService.isLoggedIn();
    
        });
      }else {

        this.isLoggedIn = this.homeService.isLoggedIn();

        this.isUserEmailLogIn = true;

      }

    
  }

  /*
  ngOnInit() {
    this.userService.getLoginInfo().subscribe(user => {
      this.user = user
    })

  }*/

  ngOnInit() {


  }

  ngOnDestroy() {

    this.subsGetMe.unsubscribe();

    this.isLoggedIn = this.homeService.isLoggedIn();

  }

  toggleShortcut() {


    this.layoutService.onShortcutToggle()
  }


  getUserName() {


    if(this.homeService.isMicrosoftLogin()){

    return this.user.displayName;

    } else {


      return this.homeService.getFbName();

    }


  }

  getUserPic() {

    //console.log(this.user.photo);
    //return this.homeService.getImageFromService();

    return this.homeService.getUserImage();



  }

}
