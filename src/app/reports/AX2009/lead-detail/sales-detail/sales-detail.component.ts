import { Component, OnInit } from '@angular/core';
import { DataSalesService } from 'app/shared/data/data-sales.service';
import { SaveSalesService } from 'app/shared/data/save-sales.service';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css']
})
export class SalesDetailComponent implements OnInit {

  salesData ;

  salesName ;

  bookedDate ;

  status ;

  constructor(private salesDetail : DataSalesService, private salesID : SaveSalesService) { 

    let salesOrder = this.salesID.getSalesID();

    this.salesDetail.getData(salesOrder).subscribe(

      (data)=> {

        this.salesData = data;
        
        for (let i = 0; i < 1; i++) {
          
          this.salesName = data[i].SALESNAME;

        this.bookedDate = data[i].CREATEDDATETIME;

        this.status = data[i].SalesStatus;
        }

        
      
      },

      (err)=> console.log(err)

    );

  }

  ngOnInit() {
  }



}
