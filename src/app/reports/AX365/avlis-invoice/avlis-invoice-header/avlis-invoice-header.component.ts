import { Component, OnInit } from '@angular/core';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { AvlisInvoiceHeaderService } from 'app/shared/data/AX365/Invoice/avlis-invoice-header.service';

@Component({
  selector: 'app-avlis-invoice-header',
  templateUrl: './avlis-invoice-header.component.html',
  styleUrls: ['./avlis-invoice-header.component.css']
})
export class AvlisInvoiceHeaderComponent implements OnInit {

  isDataAvailable: boolean = false;

  salesID: string;

  invoiceHeader;

  isError: boolean = false;

  constructor(private salesIdService: SaveSalesService, private invoiceHeaderService: AvlisInvoiceHeaderService) {

    this.salesID = this.salesIdService.getSalesID();

    this.invoiceHeaderService.getData(this.salesID).subscribe(

      (data) => {

        this.isError = false;

        this.invoiceHeader = data[0];
        
        this.isDataAvailable = true;
        //console.log(this.invoiceHeader);
      },
      (err) => {

        console.log(err);

        this.isDataAvailable = false;

        this.isError = true;

      }

    )

  }

  ngOnInit() {
  }

}
