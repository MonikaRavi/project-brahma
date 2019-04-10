import { Injectable } from '@angular/core';
import { PostTestDataService } from 'app/shared/data/MySql/QAA/post-test-data.service';

@Injectable()
export class CheckFormValidService {

  formData: any;

  constructor(private postTestData : PostTestDataService) {



  }

  setFormData(form, data) {


    if (form === 'createTestForm') {

      let dataReceived = [];

      data.forEach(element => {
        dataReceived.push(element.value)
      });

      this.formData = {

          "employeeID": dataReceived[0],
          "locationID": +dataReceived[1],
          "modelID": dataReceived[2],
          "Qty": +dataReceived[3]

        }

      this.postTestData.createTestCase(this.formData).subscribe(

        (data)=>{

        
        },

        (err)=>{

          console.log(err);
        }


      )

    }

  }


}
