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

  salesData;

  salesName;

  bookedDate;

  status;

  salesOrder;

  isDataAvailable = false;

  isError: boolean = false;

  constructor(private salesDetail: DataSalesService, private salesID: SaveSalesService, private router: Router, private route: ActivatedRoute) {

    this.salesOrder = this.salesID.getSalesID();

    this.salesDetail.getData(this.salesOrder).subscribe(

      (data) => {

        this.isError = false;

        this.salesData = data;

        for (let i = 0; i < 1; i++) {

          this.salesName = data[i].SALESNAME;

          this.bookedDate = data[i].CREATEDDATETIME;

          this.status = data[i].SalesStatus;
        }

        this.isDataAvailable = true;

      },

      (err) => {

        this.isError = true;

        console.log(err)

      }

    );

  }

  ngOnInit() {
  }

  getInvoice() {

    this.router.navigate(['../../invoiceDetail'], { relativeTo: this.route });

  }

}
