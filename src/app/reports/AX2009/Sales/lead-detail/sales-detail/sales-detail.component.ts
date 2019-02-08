import { Component, OnInit } from '@angular/core';
import { DataSalesService } from 'app/shared/data/AX2009/Sales/data-sales.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private salesDetail : DataSalesService, private salesID : SaveSalesService,private router: Router, private route:ActivatedRoute,) { 

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

  getInvoice(){

    this.router.navigate(['../../invoiceDetail'], {relativeTo: this.route});

  }

}
