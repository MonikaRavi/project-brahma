import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';

@Injectable()
export class GetLocationQaaService {

  constructor(private http: HttpClient) { }


  getData(){
    
    return this.http.get<any>(`http://localhost:3060/v1/QAA/Location`,{
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
