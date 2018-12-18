import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms'
import { DataSalesforceService } from 'app/shared/data/data-salesforce.service';

//Data Tables dependencies
import 'datatables.net-bs4';
import 'datatables.net-dt';
import 'datatables.net';
var $ = require('jquery');

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class reportDashboard implements OnInit {

  constructor(private salesforce: DataSalesforceService) { }


  // Form and Data Retrieval variables

  getDataForm: FormGroup;

  customerName: string;

  customerAvlis: string;

  customerAccAvlis: string;

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

    this.salesforce.getData('dashboard', this.queryData).subscribe(

      (data: any) => {

        //console.log(data);

        this.dataReturned = true;

        var salesforceData = [];

        var data365 = [];

        var data2009 = [];

        /*********** CUSTOMER INFO ****************/

        //SF and AX 2009

        this.customerName = data.AX2009.customer.Customer;

        //AX365

        this.customerAvlis = data.AX365.customer.Customer;

        this.customerAccAvlis = data.AX365.customer.CustAccount;



        /**************** TABLE DATA *********************/

        /**** SALESFORCE ****/

        data.salesforce.forEach(element => {

          //DataTable require data as Array of Arrays
          salesforceData.push([

            element.name,
            element.probability,
            element.amount

          ]);

        });

        /**** AX 365 ****/

        data.AX365.data.forEach(element => {

          data365.push([

            element.SalesID,
            element.createdDate,
            element.Amount

          ]);

        });

        /**** AX 2009 ****/

        data.AX2009.data.forEach(element => {

          data2009.push([

            element.SalesID,
            element.createdDate,
            element.Amount

          ]);

        });




        //defining table headers and data for the table id #Opportunity

        $(document).ready(function () {

          $('#opportunity').DataTable({

            destroy: true,  //re-initiates the data table

            data: salesforceData,

            columns: [

              { title: "Name" },
              { title: "Probability" },
              { title: "Amount" }
            ]

          });


        });



        $(document).ready(function () {

          $('#ax365').DataTable({

            destroy: true,  //re-initiates the data table

            data: data365,

            columns: [

              { title: "Sales Order" },
              { title: "Order Data" },
              { title: "Amount" }
            ]

          });


        });

        $(document).ready(function () {

          $('#ax2009').DataTable({

            destroy: true,  //re-initiates the data table

            data: data2009,

            columns: [

              { title: "Sales Order" },
              { title: "Order Data" },
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
