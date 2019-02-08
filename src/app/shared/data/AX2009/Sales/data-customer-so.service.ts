import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from 'app/shared/smartadmin.config';

@Injectable()
export class DataCustomerSoService {

  result;

  constructor(private http: HttpClient) { }

  getData(SalesID){

    
    return this.http.get<any>(`http://localhost:3000/v1/AX2009/customerFromSales/${SalesID}`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })

    .pipe(
      map(
        (response) => {


          return response;
        }
      )
    )

  }

}
