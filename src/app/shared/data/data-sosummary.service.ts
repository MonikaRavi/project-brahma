import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class DataSosummaryService {

  constructor() { }

  sales = JSON.parse(`[
    {
      "so": "SO-1787116",
      "name": "Industrial & Municipal Supply",
      "date": "2017/12/07",
      "amount": 9453.22
    },
    {
      "so": "SO-1890001",
      "name": "Western Nevada Supply-Sparks",
      "date": "2018/01/19",
      "amount": 7760
    }
  ]`);

  getData():Observable<any[]>{
    

    return of(this.sales).pipe(
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
