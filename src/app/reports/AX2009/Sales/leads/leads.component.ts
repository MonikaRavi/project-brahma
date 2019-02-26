import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSosummaryService } from 'app/shared/data/AX2009/Sales/data-sosummary.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';



@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  sales;

  isDataAvailable : boolean = false;

  isError : boolean = false;

  constructor(private soSummary : DataSosummaryService, private router: Router, private route:ActivatedRoute, private saveID : SaveSalesService) {

    this.soSummary.getData().subscribe(

      (data)=>{

       // console.log(data);

       this.isError = false;

        this.sales = data;

        this.isDataAvailable = true;

      },

      (err)=>{

        console.log(err);

        this.isError = true;

      }
    )

   }

  ngOnInit() {
  }

  getDetail(data){

    this.saveID.setSalesID(data);

    this.router.navigate(['../leadDetail',data], {relativeTo: this.route});

  }

}
