import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';


@Injectable()
export class SmartsheetService {

  constructor(private http: HttpClient) { }

  getEffort(){

    return this.http.get<any>(`http://localhost:3000/v1/SmartSheet/Sheet/resourceTrackingSheet/Effort`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })
      .pipe(
        map(
          (response) => {

            let data: any;

              data = response;

         //    console.log(data);
              
       return data;
            
          }
        )
      )

  }

}
