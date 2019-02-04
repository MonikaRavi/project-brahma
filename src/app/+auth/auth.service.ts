import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import * as hello from 'hellojs/dist/hello.all.js';


import { config } from '../shared/smartadmin.config';
import { HomeService } from '../+home/home.service';


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  
  constructor(
    // private zone: NgZone,
    // private router: Router,
    private homeService : HomeService
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
        //Checking Domain
       // console.log('Domain Check ');
        this.homeService.checkDomain();

        
        // this.zone.run(() => {
         
        //   this.router.navigate(['/home/home']);
        // });
      },
      e => console.error(e.error.message)
    );
  }

  logout() {

    if(this.homeService.isMicrosoftLogin()){

      this.homeService.setLogIn(false);

    hello('msft').logout().then(
            () => {            

              window.location.href = '/' ;
              
            },
      e => console.error(e.error.message)
    );

    }else {

      this.fbSignOut();

    }

    
  }


 /*********** Firebase Login  ***********/

 fbInitAuth(){

  firebase.initializeApp(config.fbConfig);

 }

 signInEmailPassword(email: string , password:string){

  this.fbInitAuth();

  this.homeService.setMicrosoftLogged(false);

  firebase.auth().signInWithEmailAndPassword(email,password)
  
  .then(

    response => {

     // console.log('Logged In');

      this.checkFirebase();

    }

  )

  .catch(

    (err)=>{

      console.log(`Code : ${err.code}  ;  'Message : ${err.message}`);

      window.location.href = '/' ;

    }

  );

  
 }

 checkFirebase() {

  var user = firebase.auth().currentUser;

    if (user) {

     // var user = firebase.auth().currentUser;

     //console.log(user);

     // console.log('Firebase Login..');

      this.homeService.fbLoginCheck(user) ;

    } else {

      this.fbSignOut();

    }


 }


 fbSignOut(){

  firebase.auth().signOut().then(function() {
   
    window.location.href = '/' ;

  }).catch(function(error) {
    
    console.log(error);
    
  });

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
