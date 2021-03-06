import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { config } from 'app/shared/smartadmin.config';

@Injectable()
export class DataSalesService {

  result;

  constructor(private http: HttpClient) { }


  getData(SalesID){

    return this.http.get<any>(`http://localhost:3000/v1/AX2009/salesDetails/${SalesID}`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })

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
