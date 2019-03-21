import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import { AuthService } from 'app/+auth/auth.service';

@FadeInTop()
@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
})
export class DomainComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  OnLogOut(){

    this.authService.logout();

  }

}
