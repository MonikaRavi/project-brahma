import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';
import { request } from 'http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class PostTestDataService {

  
  constructor(private http: HttpClient) { }

  createTestCase(formData){


  // console.log(formData);

   

    return this.http.post('https://sql-test-server.appspot.com/v1/QAA/testData',{testData : formData},{
      headers: new HttpHeaders().set('x-auth',config.qaaToken)
    }).pipe(
      map(
        (response) => {

          let data: any;

            data = response;

           
        // console.log(data);
            
     return data;
          
        },

        (err)=>{

             console.log('Error :  ' ,err);
        }
      )
    )

  }

}
