import { Component, OnInit } from '@angular/core';
import { InvoiceDetailService } from 'app/shared/data/AX2009/Invoice/invoice-detail.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';

@Component({
  selector: 'app-detail-invoice',
  templateUrl: './detail-invoice.component.html',
  styleUrls: ['./detail-invoice.component.css']
})
export class DetailInvoiceComponent implements OnInit {

  invoicedetail ;

  invoices;

  salesID;

  isDataAvaiable : boolean = false;

  constructor(private invoiceDetailService : InvoiceDetailService, private salesService : SaveSalesService) {

    this.salesID = this.salesService.getSalesID();

   this.invoiceDetailService.getData(this.salesID).subscribe(

    (data)=>{

      if(data.length !==0) {

        this.invoices = data[0];

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
