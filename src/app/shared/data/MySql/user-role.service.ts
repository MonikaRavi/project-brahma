
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { config } from 'app/shared/smartadmin.config';



@Injectable()
export class UserRoleService {

  /****  User Role ****/



  constructor(private http: HttpClient) { }


  getData(userEmail) {


    return this.http.get<any>(`http://localhost:3030/v1/WA/rolesByEmail/${userEmail}`,
      {
        headers: new HttpHeaders().set('x-auth', config.webSubToken)
      }
    )

      .pipe(
        map(
          (response) => {

            const data = response;

            //console.log(data);

            return data;
          }
        )
      )

  }

}
