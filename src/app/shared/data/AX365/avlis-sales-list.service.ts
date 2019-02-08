import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from "app/shared/smartadmin.config";

@Injectable()
export class AvlisSalesListService {

  constructor(private http: HttpClient) { }

  
  getData(){
    

    return this.http.get<any>(`http://localhost:3000/v1/AX365/salesOrderList`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })

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
