import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { HomeService } from './home.service';
import { AuthService } from '../+auth/auth.service';





import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'
import { map } from 'rxjs/operators';
import { DataRetrievalService } from 'app/shared/data/IoT/data-retrieval.service';


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
   user: microsoftgraph.User;

  // Form and Data Retrieval variables

  getDataForm: FormGroup;

  dataReturned: any[];

  queryType: string;

  inputTypes = [
    'Email',
    'Rfid'
  ];

  queryTypes = [
    'Summary',
    'Details'
  ];

  errorMessage: string;

  fbUserName : string;

  fbUserEmail : string;

  fbUserPhoto : string ;

  isDataAvailable : boolean = false;

  isClicked : boolean = false;

  isError : boolean = false;


  constructor(private homeService: HomeService, private authService: AuthService, private dataService: DataRetrievalService) {



  }

  isUserEmailLogin: boolean = false;

  inputSelected;
  querySelected;

  ngOnInit() {

    
      if(this.homeService.isMicrosoftLogin()){

        this.subsGetMe = this.homeService.getMe().subscribe(me => this.me = me);

      } else {

        this.fbUserName = this.homeService.getFbName();

        this.fbUserEmail = this.homeService.getFbEmail();

        this.fbUserPhoto = this.homeService.getFbPhoto();

        this.isUserEmailLogin = true;

      }
   
    this.getDataForm = new FormGroup({
      'queryValue': new FormControl(null, Validators.required),
      'ipType': new FormControl('Email'),
      'queryType': new FormControl('Summary')
    });


    
    this.errorMessage = '';

    setTimeout(() => {

      if(this.homeService.isMicrosoftLogin()){

        this.querySelected = this.me.mail;

      } else {


        this.querySelected = this.homeService.getFbEmail();

      }
      
     // console.log(this.querySelected);

      // console.log(this.me);

      this.getdata();

    }, 1000);

     

    

  

  }

  
  ngOnDestroy() {

    if(this.homeService.isMicrosoftLogin()){

      this.subsGetMe.unsubscribe();

    }
    
   // this.subsGetPhoto.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {
    this.authService.login();
  }

  getUserName() {

    let userName ;

    if(this.homeService.isMicrosoftLogin()) {

      userName = this.me.displayName;
    }else {

      userName =  this.fbUserName;

    }

    //console.log(userName);

    return userName;

  }

  getEmail() {

    let userEmail ;

    if(this.homeService.isMicrosoftLogin()) {

      userEmail =  this.me.mail;
    }else {

      userEmail =  this.fbUserEmail;

    }

    return userEmail;
    

  }

  getPhoto() {

    //console.log(this.user.photo);

    let userPhoto ; 
    
    if(this.homeService.isMicrosoftLogin()) {

      userPhoto =   this.homeService.getImageFromService();
    }else {

      userPhoto =  this.fbUserPhoto;

    }

    console.log(userPhoto);
 
    return userPhoto;

  }


  setInputData() {

    this.querySelected = this.getDataForm.controls.queryValue.value;

    this.getdata();

  }


  getdata() {

    this.dataReturned = null;

    this.isClicked = true;

    this.isError = false;

    this.queryType = this.getDataForm.controls.queryType.value;

    this.inputSelected = this.getDataForm.controls.ipType.value;


    let query;


    query = this.queryType.concat('/').concat(this.inputSelected).concat('/').concat(this.querySelected);



    this.dataService.getData(query)
      .subscribe(
        (data: any[]) => {

          this.isDataAvailable = true;
          this.dataReturned = data;

         // console.log('data returned', this.dataReturned);

        },
        (error) => {

          this.isError = true;
          //this.errorMessage = 'No Data Found for : ' + this.querySelected;

        }
      )
      ;

    this.errorMessage = '';

  }


 


}
