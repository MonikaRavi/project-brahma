import { Component, OnInit } from '@angular/core';
import { DataSosummaryService } from 'app/shared/data/data-sosummary.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveSalesService } from 'app/shared/data/save-sales.service';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  sales;

  isDataAvailable : boolean = false;

  constructor(private soSummary : DataSosummaryService, private router: Router, private route:ActivatedRoute, private saveID : SaveSalesService) {

    this.soSummary.getData().subscribe(

      (data)=>{

       // console.log(data);

        this.sales = data;

        this.isDataAvailable = true;

      },

      (err)=>{

        console.log(err);

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
