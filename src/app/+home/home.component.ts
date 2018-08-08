import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { HomeService } from './home.service';
import { AuthService } from '../+auth/auth.service';


import { DataRetrievalService } from '../shared/data-retrieval.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'
import { map } from 'rxjs/operators';


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

 // Form and Data Retrieval variables

 getDataForm: FormGroup;

 dataReturned: any[];

 queryType: string ;

 inputTypes = [
   'Email',
   'Rfid'
 ];

 queryTypes = [
   'Summary',
   'Details'
 ];

 errorMessage: string;

  

  constructor( private homeService: HomeService, private authService: AuthService, private dataService: DataRetrievalService ) { 
    

  
  }

  ngOnInit() {

    this.subsGetMe = this.homeService.getMe().subscribe(me => this.me = me );
    this.subsGetPhoto = this.homeService.getPhoto().subscribe(user => this.user = user );
    
    this.getDataForm = new FormGroup({
      'queryValue': new FormControl(null, Validators.required),
      'ipType': new FormControl('Email'),
      'queryType': new FormControl('Summary')
    });

    this.errorMessage = '';

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

  getEmail() {

    return this.me.mail;

  }

  getPhoto(){

    //console.log(this.user.photo);
    
    console.log(this.user.photo);

    return this.user.photo;

    
  }

  getdata() {

    this.dataReturned = null ;

    const querySelected = this.getDataForm.controls.queryValue.value;

    const inputSelected = this.getDataForm.controls.ipType.value;

    this.queryType = this.getDataForm.controls.queryType.value;


    let query;


      query = this.queryType.concat('/').concat(inputSelected).concat('/').concat(querySelected);

          

    this.dataService.getData(query)
      .subscribe(
        (data: any[]) => {

          
          this.dataReturned = data;

          console.log ('data returned', this.dataReturned);

        },
        (error) => {

          this.errorMessage = 'No Data Found for : ' + querySelected;

        }
      )
      ;

    this.errorMessage = '';

  }


}
