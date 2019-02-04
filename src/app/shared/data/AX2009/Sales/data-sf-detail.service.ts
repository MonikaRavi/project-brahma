import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { database } from 'firebase';

@Injectable()
export class DataSfDetailService {

  result;

  constructor(private http: HttpClient) { }

  getData(SalesID){

      
    
    
    return this.http.get<any>(`http://localhost:3000/v1/salesforce/salesDetails/${SalesID}`)

    .pipe(
      map(
        (response) => {

          let data: any;

          console.log(response);
        

          if(response !== []){        

          // console.log(response);
 
           for (let index = 0; index < 1; index++) {
             
             data = response[index];
           }

          } else {

            data = [];
            
          }
      
          console.log(data);

          return data;
        }
      )
    )

  }

}
