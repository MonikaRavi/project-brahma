import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';
import { request } from 'http';

@Injectable()
export class PostTestDataService {

  
  constructor(private http: HttpClient) { }

  createTestCase(formData){


   console.log(formData);

   

    return this.http.post('http://localhost:3060/v1/QAA/testData',{testData : formData},{
      headers: new HttpHeaders().set('x-auth',config.qaaToken)
    }).pipe(
      map(
        (response) => {

          let data: any;

            data = response;

         //console.log(data);
            
     return data;
          
        },

        (err)=>{

             console.log('Error :  ' ,err);
        }
      )
    )

  }

}
