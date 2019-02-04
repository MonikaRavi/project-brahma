import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class DataSalesService {

  result;

  constructor(private http: HttpClient) { }


  getData(SalesID){

    return this.http.get<any>(`http://localhost:3000/v1/AX2009/salesDetails/${SalesID}`)

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
