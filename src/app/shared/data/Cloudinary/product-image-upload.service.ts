import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'app/shared/smartadmin.config';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductImageUploadService {

  constructor(private http: HttpClient) { }

  uploadImage(productID, imageArray){

    const formData : FormData = new FormData();

    const uploadData = {
      "productId": productID,
      "images" : imageArray
    }

    console.log(uploadData);
    return this.http.post('http://localhost:3000/v1/Cloudinary/image',{picBase64 :uploadData},{
      headers: new HttpHeaders().set('x-auth',config.hawsToken)
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
