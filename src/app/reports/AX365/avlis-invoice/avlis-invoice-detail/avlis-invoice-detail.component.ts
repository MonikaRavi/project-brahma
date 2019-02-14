import { Component, OnInit } from '@angular/core';
import { AvlisInvoiceDetailService } from 'app/shared/data/AX365/Invoice/avlis-invoice-detail.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';

@Component({
  selector: 'app-avlis-invoice-detail',
  templateUrl: './avlis-invoice-detail.component.html',
  styleUrls: ['./avlis-invoice-detail.component.css']
})
export class AvlisInvoiceDetailComponent implements OnInit {

  invoicedetail ;

  invoices;

  salesID;

  isDataAvaiable : boolean = false;

  constructor(private invoiceDetailService : AvlisInvoiceDetailService, private salesService : SaveSalesService) {

    this.salesID = this.salesService.getSalesID();

   this.invoiceDetailService.getData(this.salesID).subscribe(

    (data)=>{

      if(data.length !==0) {

        this.invoices = data;

        this.isDataAvaiable = true;
      
      } else {

        this.isDataAvaiable = false;
      }

     
    },

    (err)=>{

      console.log(err);

      this.isDataAvaiable = false;
    }


   )

   

   }


  ngOnInit() {
  }

}
