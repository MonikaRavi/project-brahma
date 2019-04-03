import { Component, OnInit } from '@angular/core';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';

@Component({
  selector: 'app-avlis-invoice',
  templateUrl: './avlis-invoice.component.html',
  styleUrls: ['./avlis-invoice.component.css']
})
export class AvlisInvoiceComponent implements OnInit {

  isDataAvailable : boolean = true;

  salesId;

 constructor(private salesService : SaveSalesService){
  
  this.salesId = this.salesService.getSalesID();

 }

  ngOnInit() {

    

  }

}
