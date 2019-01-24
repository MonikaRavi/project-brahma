import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'
import { DataSalesforceService } from 'app/shared/data/data-salesforce.service';

//Data Tables dependencies
import 'datatables.net-bs4';
import 'datatables.net-dt';
import 'datatables.net';
var $ = require('jquery');

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  constructor(private salesforce: DataSalesforceService) { }


  // Form and Data Retrieval variables

  getDataForm: FormGroup;

  dataReturned = false;

  queryData: string;

  errorMessage: string;

  ngOnInit() {

    this.getDataForm = new FormGroup({
      'queryValue': new FormControl(null, [Validators.required, Validators.min(5)])

    });

    this.errorMessage = '';

  }

  getOpportunity() {

    this.queryData = this.getDataForm.controls.queryValue.value;

    this.salesforce.getData('opportunities', this.queryData).subscribe(

      (data: any) => {

        this.dataReturned = true;

        var dataSet = [];

        /**** SALESFORCE ****/

      
        data.forEach(element => {

          //DataTable require data as Array of Arrays
          dataSet.push([

            element.name,
            element.probability,
            element.amount

          ]);

        });

        //defining table headers and data for the table id #Opportunity

        $(document).ready(function () {

          $('#opportunity').DataTable({

            destroy: true,  //re-initiates the data table

            data: dataSet,

            columns: [

              { title: "Name" },
              { title: "Probability" },
              { title: "Amount" }
            ]

          });

        });


      },
      (error) => {

        this.dataReturned = false;

        console.log('Error ', error);
      }
    );

  }

}