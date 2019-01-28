import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class AvlisSalesDetailService {

  constructor(private http: HttpClient) { }

  getData(SalesID) {

    return this.http.get<any>(`http://localhost:3000/v1/AX365/salesOrderDetailsFromSalesId/${SalesID}`)

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
