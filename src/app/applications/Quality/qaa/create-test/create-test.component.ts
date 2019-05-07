import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { GetLocationQaaService } from 'app/shared/data/MySql/QAA/get-location-qaa.service';
import { GetModelQaaService } from 'app/shared/data/MySql/QAA/get-model-qaa.service';
import { GetUsersQaaService } from 'app/shared/data/MySql/QAA/get-users-qaa.service';





@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  isDataAvailable: boolean = false;

  isError : boolean = false;

  models ;

  location ;

  users;
  
  
  validatorOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      user: {
        validators: {
          notEmpty: {
            message: 'The User detail is required'
          }
        }
      },
      location: {
        validators: {
          notEmpty: {
            message: 'The Location detail is required'
          }
        }
      },
      model: {
        validators: {
          notEmpty: {
            message: 'The Model detail is required'
          }
        }
      },
      qty: {
        validators: {
          notEmpty: {
            message: 'The Quantity is required'
          },
          numeric: {
            message: 'The Quantity must be a number'
          }
        }
      }
    }
  };


  constructor(private qaaLocationService : GetLocationQaaService, private qaaModelService : GetModelQaaService, private qaaUserService : GetUsersQaaService ) {
 

    Observable.combineLatest(this.qaaLocationService.getData(), this.qaaModelService.getData(), this.qaaUserService.getData()).subscribe(

      ([locationData, modelData, usersData])=>{

        this.location = locationData;

        this.models = modelData;

        this.users = usersData;

        this.isDataAvailable = true;

      }, 

      (err)=>{

        console.log(err);

        this.isError = true;

      }

    )



    
  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() {
    
   //form data is sent / retrieved from CheckFormValidService class which is called by bootstrapValidator

     // console.log('Form submitted');


  }

}
