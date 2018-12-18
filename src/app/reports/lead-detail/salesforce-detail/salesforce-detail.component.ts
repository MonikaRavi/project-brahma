import { Component, OnInit } from '@angular/core';
import { DataSfDetailService } from 'app/shared/data/data-sf-detail.service';
import { SaveSalesService } from 'app/shared/data/save-sales.service';

@Component({
  selector: 'app-salesforce-detail',
  templateUrl: './salesforce-detail.component.html',
  styleUrls: ['./salesforce-detail.component.css']
})
export class SalesforceDetailComponent implements OnInit {

  salesforceData ;

  constructor(private sfData : DataSfDetailService, private salesID : SaveSalesService) {

    let salesOrder = this.salesID.getSalesID();

    this.sfData.getData(salesOrder).subscribe(

      (data)=>{

        this.salesforceData = data;

      }, (err)=> console.log(err)

    );

   }

  ngOnInit() {
  }

}
