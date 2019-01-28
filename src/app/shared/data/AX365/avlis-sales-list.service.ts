import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AvlisSalesListService {

  constructor(private http: HttpClient) { }

  
  getData(){
    

    return this.http.get<any>(`http://localhost:3000/v1/AX365/salesOrderList`)

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
