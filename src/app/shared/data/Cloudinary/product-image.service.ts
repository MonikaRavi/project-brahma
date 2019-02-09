import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductImageService {

  constructor(private http: HttpClient) { }

  getImage(productID){

    return this.http.get<any>(`http://localhost:3000/v1/Cloudinary/${productID}`,{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
    })
      .pipe(
        map(
          (response) => {

            let data: any;

              data = response;

             // console.log(data);
              
       return data;
            
          }
        )
      )

  }

}
