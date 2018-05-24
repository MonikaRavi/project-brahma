import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import * as hello from 'hellojs/dist/hello.all.js';
import { Router } from '@angular/router';

import { config } from '../shared/smartadmin.config';


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  
  constructor(
    private zone: NgZone,
    private router: Router
  ) { }

  initAuth() {
    hello.init({
        msft: {
          id: config.appId,
          oauth: {
            version: 2,
            auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: window.location.href }
    );
  }

  login() {
    hello('msft').login({ scope: config.scope }).then(
      () => {
        this.zone.run(() => {
          this.router.navigate(['/home/home']);
        });
      },
      e => console.error(e.error.message)
    );
  }

  logout() {
    hello('msft').logout().then(
      () => window.location.href = '/',
      e => console.error(e.error.message)
    );
  }




/*

  login(): Observable<boolean> {

    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  */



}
