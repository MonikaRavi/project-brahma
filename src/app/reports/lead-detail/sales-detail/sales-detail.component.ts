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
        
        this.salesName = data[0].salesName;

        this.bookedDate = data[0].date;

        this.status = data[0].status;
      
      },

      (err)=> console.log(err)

    );

  }

  ngOnInit() {
  }



}
