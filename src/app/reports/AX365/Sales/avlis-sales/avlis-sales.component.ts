import { Component, OnInit } from '@angular/core';
import { AvlisSalesListService } from 'app/shared/data/AX365/avlis-sales-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';

@Component({
  selector: 'app-avlis-sales',
  templateUrl: './avlis-sales.component.html',
  styleUrls: ['./avlis-sales.component.css']
})
export class AvlisSalesComponent implements OnInit {

  sales;

  isDataAvailable: boolean = false;

  isError : boolean = false;

  constructor(private soSummary: AvlisSalesListService, private router: Router, private route: ActivatedRoute, private saveID: SaveSalesService) {

    this.soSummary.getData().subscribe(

      (data) => {

        this.isError = false;

        // console.log(data);

        this.sales = data;

        this.isDataAvailable = true;

      },

      (err) => {

        console.log(err);

        this.isError = true;

      }
    )

  }

  ngOnInit() {
  }

  getDetail(data) {

    this.saveID.setSalesID(data);

    this.router.navigate(['../avlisSalesdetail', data], { relativeTo: this.route });

  }

}
