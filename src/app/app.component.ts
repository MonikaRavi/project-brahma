import {Component, ViewContainerRef, OnInit} from '@angular/core';
import { AuthService } from './+auth/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  public title = 'app works!';

  public constructor(private viewContainerRef: ViewContainerRef, private authService: AuthService) {}

  ngOnInit() {
    this.authService.initAuth();

}

}
