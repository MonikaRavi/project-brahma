import { Component, OnInit } from '@angular/core';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { InvoiceDetailService } from 'app/shared/data/AX2009/Invoice/invoice-detail.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  isDataAvailable : boolean = true;

  salesId;
  

 constructor(private salesService : SaveSalesService){
  
  this.salesId = this.salesService.getSalesID();

 }

  ngOnInit() {

    

  }



}
