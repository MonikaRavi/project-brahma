import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { config } from 'app/shared/smartadmin.config';

@Injectable()
export class InventoryListService {

  constructor(private http: HttpClient) { }

  getData() {


    return this.http.get<any>(`http://localhost:3000/v1/AX2009/Inventory/List`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })
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
