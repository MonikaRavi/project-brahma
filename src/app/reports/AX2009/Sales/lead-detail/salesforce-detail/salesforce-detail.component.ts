import { Component, OnInit } from '@angular/core';
import { DataSfDetailService } from 'app/shared/data/AX2009/Sales/data-sf-detail.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';


@Component({
  selector: 'app-salesforce-detail',
  templateUrl: './salesforce-detail.component.html',
  styleUrls: ['./salesforce-detail.component.css']
})
export class SalesforceDetailComponent implements OnInit {

  salesforceData;

  isDataAvailable: boolean = false;

  isLinked: boolean = false;

  isError: boolean = false;

  constructor(private sfData: DataSfDetailService, private salesID: SaveSalesService) {


  }

  ngOnInit() {

    let salesOrder = this.salesID.getSalesID();

    this.sfData.getData(salesOrder).subscribe(

      (data) => {

        this.isError = false;

        // console.log(data);

        if (data.length !== 0) {


          this.salesforceData = data[0];

          // console.log(data);

          this.isDataAvailable = true;


        } else {

          this.isDataAvailable = false;

        }

        this.isLinked = true;

      }, (err) => {

        this.isError = true;

        console.log(err)

      }

    );

  }

}
