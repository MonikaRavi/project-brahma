import { Injectable } from '@angular/core';
import { PostTestDataService } from 'app/shared/data/MySql/QAA/post-test-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class CheckFormValidService {

  formData: any;

  constructor(private postTestData : PostTestDataService, private router: Router, private route: ActivatedRoute) {



  }

  setFormData(form, data, currentRoute) {


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
          
          //current route is not saved and hence the route is passed as argument

         this.router.navigate(['../createLines', JSON.stringify(data)], { relativeTo: currentRoute, skipLocationChange: true });

        
        },

        (err)=>{

          console.log(err);
        }


      )

    }

  }


}
