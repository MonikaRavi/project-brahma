import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class DataSfDetailService {

  result;

  constructor() { }

  SO1 = JSON.parse(`[
    {
      "name": "CWW - South Columbus Chemical Improvements Project-GA",
      "qAmount": 9453.22,
      "so":"SO-1787116",
      "erpAmount": 9453,
      "accountID": "0010L00001pHz56QAC",
      "closeDate":"2018-01-31",
      "deliveryState":"GA"
    }    
  ]`);

  SO2 = JSON.parse(`[{
    "name": "Arconic - Verdi, NV",
    "qAmount": 7760,
    "so":"SO-1890001",
    "erpAmount": 7760,
    "accountID": "0010L00001quVCNQA2",
    "closeDate":"2018-01-19",
    "deliveryState":"NV"
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
