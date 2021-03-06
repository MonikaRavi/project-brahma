import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";


//Form 
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'

//Data Tables dependencies
import 'datatables.net-bs4';
import 'datatables.net-dt';
import 'datatables.net';

      import 'script-loader!smartadmin-plugins/datatables/datatables.min.js';

import { DataSalesforceService } from 'app/shared/data/Salesforce/data-salesforce.service';



var $ = require('jquery');



@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  constructor(private salesforce: DataSalesforceService) { }

  //Form Components
 
  getDataForm: FormGroup;

  dataReturned = false;

  inputSelected = 'Safety';

  distributorTypes = [
    'Safety',
    'Plumbing'
  ];

  isError = false;

  isClicked = false;

  dataTable ;

  ngOnInit() {

    this.getDataForm = new FormGroup({
           'distType': new FormControl('Safety')   //default value : Safety
    });

    

  }


  setInputData() {

    this.inputSelected = this.getDataForm.controls.distType.value;

    console.log(this.inputSelected);
  }
 
  //Get Salesforce Data

  getSalesforceData() {

    this.isClicked = true;

    this.isError = false;

    this.inputSelected = this.getDataForm.controls.distType.value;

    //console.log(this.inputSelected);


    this.salesforce.getData('Distributor',this.inputSelected).subscribe(

      (data: any) => {

        
        this.dataReturned = true;
 
        var dataSet = [];
        data.forEach(element => {
          //DataTable require data as Array of Arrays
          dataSet.push([

            element.accountId,
            element.Name,
            element.Type,
            element.Phone,
            element.Website

          ]);

        });

        //defining table headers and data for the table id #safety

        $(document).ready(function () {

          $('#safety').DataTable({

            destroy: true,  //re-initiates the data table
            
            data: dataSet,

            columns: [

              { title: "accountId" },
              { title: "Name" },
              { title: "Type" },
              { title: "Phone" },
              { title: "Website" }

            ]

          });

          

        });

        /** sa-datatable */

        // let jsonData = [];

        // console.log(data);

        // data.forEach(element => {

        //   let jsonElement = {

        //     "account" : element.accountId,
        //     "name" : element.Name,
        //     "type" : element.Type,
        //     "phone" : element.Phone,
        //     "web": element.Website
        //   }

        //   jsonData.push(jsonElement);

        // });

        // this.dataTable = jsonData;

        // console.log(this.dataTable);


      },
      (error) => {

        this.dataReturned = false;

        this.isError = true;

        console.log('Error ', error);
      }
    );

  }

}
