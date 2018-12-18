import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class DataSalesService {

  result;

  constructor() { }

  SO1 = JSON.parse(`[
    {
      "so": "SO-1787116",
      "salesName": "Industrial & Municipal Supply",
      "date":"2017-12-07",
      "customer": "Industrial & Municipal Supply",
      "itemID": "9001",
      "itemName":"Alarm Nema 4 F/Shower DPDT",
      "qty":"3",
      "amount":2475,
      "status" : "Invoiced"
    },
    {
      "so": "SO-1787116",
      "salesName": "Industrial & Municipal Supply",
      "date":"2017-12-07",
      "customer": "Industrial & Municipal Supply",
      "itemID": "8317CTFP",
      "itemName":"Shower Combination Heat Traced",
      "qty":"1",
      "amount":2400,
      "status" : "Invoiced"
    } ,
    {
      "so": "SO-1787116",
      "salesName": "Industrial & Municipal Supply",
      "date":"2017-12-07",
      "customer": "Industrial & Municipal Supply",
      "itemID": "8320-8325",
      "itemName":"Shower Combination",
      "qty":"2",
      "amount":850,
      "status" : "Invoiced"
    } ,
    {
      "so": "SO-1787116",
      "salesName": "Industrial & Municipal Supply",
      "date":"2017-12-07",
      "customer": "Industrial & Municipal Supply",
      "itemID": "9201H",
      "itemName":"Valve Mixing 31 GPM",
      "qty":"3",
      "amount":3728.22,
      "status" : "Invoiced"
    }     
  ]`);

  SO2 = JSON.parse(`[{
    "so": "SO-1890001",
      "salesName": "Western Nevada Supply-Sparks",
      "date":"2018-01-19",
      "customer": "Western Nevada Supply-Sparks",
      "itemID": "9326",
      "itemName":"Instantaneous/tankless heater",
      "qty":"1",
      "amount":7760,
      "status" : "Invoiced"
  }]`);

  getData(SalesID): Observable<any[]> {

    if (SalesID === "SO-1787116") {

      this.result = this.SO1;

    } else {

      this.result = this.SO2;

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
