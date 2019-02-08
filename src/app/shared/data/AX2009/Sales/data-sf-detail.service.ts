import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { database } from 'firebase';
import { config } from 'app/shared/smartadmin.config';

@Injectable()
export class DataSfDetailService {

  result;

  constructor(private http: HttpClient) { }

  getData(SalesID){

      
    
    
    return this.http.get<any>(`http://localhost:3000/v1/salesforce/salesDetails/${SalesID}`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })

    .pipe(
      map(
        (response) => {

         // let data: any;

         //console.log(response);
             
        //  console.log(data);

          return response;
        }
      )
    )

  }

}
