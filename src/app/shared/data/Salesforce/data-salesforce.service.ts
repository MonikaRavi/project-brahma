import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from "@angular/common/http";
import { map } from 'rxjs/operators';



@Injectable()

export class DataSalesforceService {

  constructor(private http: HttpClient) {

  }

  getData(type, queryValue) {


    return this.http.get<any>(`http://localhost:3000/v1/Salesforce/${type}/${queryValue}`)

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
