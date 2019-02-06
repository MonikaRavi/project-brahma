import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataOnhandService {

  constructor(private http: HttpClient) { }


  getData(productID) {


    return this.http.get<any>(`http://localhost:3000/v1/AX2009/Inventory/onHand/${productID}`)
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
