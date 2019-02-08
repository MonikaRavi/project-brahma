import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from 'app/shared/smartadmin.config';

@Injectable()
export class AvlisCustomerSoService {

  result;

  constructor(private http: HttpClient) { }

  getData(SalesID){

   
    return this.http.get<any>(`http://localhost:3000/v1/AX365/customerFromSales/${SalesID}`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })

    .pipe(
      map(
        (response) => {

          //console.log(response);

          let data: any;

          for (let index = 0; index < 1; index++) {
            
            data = response[index];
          }

         
          // console.log(data);

          return data;
        }
      )
    )

  }

}
