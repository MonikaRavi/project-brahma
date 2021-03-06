import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from 'app/shared/smartadmin.config';

@Injectable()
export class DataOnhandService {

  constructor(private http: HttpClient) { }


  getData(productID) {


    return this.http.get<any>(`http://localhost:3000/v1/AX2009/Inventory/onHand/${productID}`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })
      .pipe(
        map(
          (response) => {

            let data: any;

              data = response;
       
            //console.log(data);

            return data;
          }
        )
      )


  }

}
