import { Component, OnInit } from '@angular/core';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { InvoiceHeaderService } from 'app/shared/data/AX2009/Invoice/invoice-header.service';


@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.css']
})
export class InvoiceHeaderComponent implements OnInit {

  isDataAvailable : boolean = false;

  salesID : string;

  invoiceHeader;

  constructor(private salesIdService : SaveSalesService, private invoiceHeaderService : InvoiceHeaderService ) {

    this.salesID = this.salesIdService.getSalesID();

   this.invoiceHeaderService.getData(this.salesID).subscribe(

    (data)=>{

      this.invoiceHeader = data[0];
      this.isDataAvailable = true;
      //console.log(this.invoiceHeader);
    },
    (err)=>{

      console.log(err);
      this.isDataAvailable = false;

    }

   )

   }

  ngOnInit() {
  }

}
