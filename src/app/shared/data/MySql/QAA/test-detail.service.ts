import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';

@Injectable()
export class TestDetailService {

  constructor(private http: HttpClient) { }


  getData(testID){
    
    return this.http.get<any>(`https://sql-test-server.appspot.com/v1/QAA/testDetailByID/${testID}`,{
      headers: new HttpHeaders().set('x-auth',config.qaaToken)
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
