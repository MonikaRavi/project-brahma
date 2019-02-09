import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';

@Injectable()
export class CheckCloudinaryService {

  constructor(private http: HttpClient) { }

  getData(item) {


    return this.http.get<any>(`http://localhost:3000/v1/AX2009/Inventory/checkImage/${item}`,{
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
