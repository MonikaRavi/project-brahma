
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class DataFreightviewService {

  result;

  constructor(private http: HttpClient) { }


  getData(SalesID){

    return this.http.get<any>(`http://localhost:3000/v1/Freightview/shipmentDetailsFromSales/${SalesID}`)

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
