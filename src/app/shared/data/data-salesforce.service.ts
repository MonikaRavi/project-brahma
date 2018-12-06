import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from "@angular/common/http";
import { map } from 'rxjs/operators';



@Injectable()

export class DataSalesforceService {

  AX365;

  AX2009;

  constructor(private http: HttpClient) { 

this.AX365 = [];

this.AX2009 = [];

this.AX365 = [{

  salesID : "OV003049",
  createdDate: "11/9/2018",
  Amount:  9546.12 

},
{

  salesID : "OV003053",
  createdDate: "11/9/2018",
  Amount:  5806.37 

},
{

  salesID : "OV003119",
  createdDate: "11/12/2018",
  Amount: 177.12 

}];

this.AX2009 = [
  {

    salesID : "SO-18114498",
    createdDate: "12/1/2018",
    Amount:  154.55

  },
  {

    salesID : "SO-18112565",
    createdDate: "10/30/2018",
    Amount:  166.46 

  },
  {

    salesID : "SO-18112037",
    createdDate: "10/23/2018",
    Amount: 1096.54 

  }
];


  }

  getData(type, queryValue) {

    
  return  this.http.get<any>('https://salesforce-api-sandbox.herokuapp.com/'+type+'/'+queryValue
    )
    
  .pipe(
    map(
      (response) =>{

const data = response;

let dataArray = [];

dataArray.push({
  salesforce : data,
  AX365: this.AX365,
  AX2009: this.AX2009
});

return dataArray;
      }
    )
  )
  

  }


}
