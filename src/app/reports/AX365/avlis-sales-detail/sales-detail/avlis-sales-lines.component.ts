import { Component, OnInit } from '@angular/core';
import { AvlisSalesDetailService } from 'app/shared/data/AX365/avlis-sales-detail.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avlis-sales-lines',
  templateUrl: './avlis-sales-lines.component.html',
  styleUrls: ['./avlis-sales-lines.component.css']
})
export class AvlisSalesLinesComponent implements OnInit {


  salesData;

  salesName;

  receiptDate;

  status;

  isDataAvailable = false;

  isError: boolean = false;

  constructor(private salesDetail: AvlisSalesDetailService, private salesID: SaveSalesService, private router: Router, private route: ActivatedRoute) {

    let salesOrder = this.salesID.getSalesID();

    this.salesDetail.getData(salesOrder).subscribe(

      (data) => {

        this.isError = false;

        this.salesData = data;

        for (let i = 0; i < 1; i++) {

          this.salesName = data[i].SALESNAME;

          this.receiptDate = data[i].BOOKEDDATE;

          this.status = data[i].SALESSTATUS;
        }

        this.isDataAvailable = true;
        //  console.log(this.salesData);

      },

      (err) => {

        console.log(err);

        this.isError = true;

      }

    );
  }

  getInvoice() {

    this.router.navigate(['../../avlisInvoiceDetail'], { relativeTo: this.route });

  }

  ngOnInit() {
  }
}
