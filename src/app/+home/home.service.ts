/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import * as MicrosoftGraphClient from "@microsoft/microsoft-graph-client"
import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../shared/smartadmin.http.service';
import { Router } from '@angular/router';

@Injectable()
export class HomeService {
  url = 'https://graph.microsoft.com/v1.0';
  file = 'demo.xlsx';
  table = 'Table1';

 

  constructor(
    private http: Http,
    private httpService: HttpService, private zone: NgZone,
    private router: Router) {
  }

  getClient(): MicrosoftGraphClient.Client {
    var client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
        done(null, this.httpService.getAccessToken()); //first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }

  getEmail() {

    let email: string;

    this.getMe().subscribe(
      (response) => {
        // console.log('Home Service ',response.mail);
        email = response.mail;
      }
    )

    return email;
  }


  getMe(): Observable<MicrosoftGraph.User> {
    var client = this.getClient();
    return Observable.fromPromise(client
      .api('me')
      .select("displayName, userPrincipalName, id, mail")
      .get()
      .then((res => {

        //console.log(res);
        return res;
      }))
    );
  }


  checkDomain() {

    let email: string;

    let domain = '@Hawsco.com';

    this.getMe().subscribe(

      (response) => {

        email = response.userPrincipalName;

        if (email.search(domain) == -1) {

          // console.log('Not Haws Login');

          this.router.navigate(['/home/miscellaneous/domain']);

        } else {

          // console.log('Haws Login');

          this.zone.run(() => {

            this.router.navigate(['/home/home']);
          });

        }
      }
    )
  }



  /*
   getMe(): Observable<MicrosoftGraph.User>
   {
     var client = this.getClient();
      return Observable.fromPromise(client
     .api('users/d63280d3-c88c-41d0-82ca-a0f36f19eeda/profilePhoto/$value')
     //.select("displayName, userPrincipalName, id, photo")
     .get()
     .then ((res => {
  
       console.log(res);
       return res;
     } ) )
     );
   }
  */
  sendMail(mail: MicrosoftGraph.Message) {
    var client = this.getClient();
    return Observable.fromPromise(client
      .api('me/sendmail')
      .post({ message: mail })
    );
  }

  getPhoto(): Observable<MicrosoftGraph.User> {
    var client = this.getClient();
    //console.log(client);
    return Observable.fromPromise(client
      .api('me/photo')
      .select('*')
      .get()
      .then((res => {

        //console.log(res);
        return res;
      }))
    );
  }


}
