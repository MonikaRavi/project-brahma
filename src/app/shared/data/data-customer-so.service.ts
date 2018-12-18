import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map } from "rxjs/operators";

@Injectable()
export class DataCustomerSoService {

  result;

  constructor() { }

  SO1 = JSON.parse(`[
    {
      "so": "SO-1787116",
      "account": "08136",
      "name":"Industrial & Municipal Supply",
      "phone": "",
      "email": "",
      "address":"c/o 583-42 Rockhill WTP 7647 West Point Rd West Point, GA 31833",
      "RSD":"Larry J Knight Jr"
    }    
  ]`);

  SO2 = JSON.parse(`[{
    "so": "SO-1890001",
    "account": "10153",
    "name":"Western Nevada Supply-Sparks",
    "phone": "",
    "email": "",
    "address":"950 South Rock Blvd Sparks, NV 89431",
    "RSD":"Lex Klees"
  }]`);

  getData(SalesID):Observable<any[]>{

    if(SalesID === "SO-1787116") {

      this.result = this.SO1[0];

    } else {

      this.result = this.SO2[0];

    }
    
    
    return of(this.result).pipe(
      map(
        (response) => {

          const data = response;

         // console.log(data);

          return data;
        }
      )
    )

  }

}
