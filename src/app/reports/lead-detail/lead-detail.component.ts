import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCustomerSoService } from 'app/shared/data/data-customer-so.service';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.css']
})
export class LeadDetailComponent implements OnInit {

  customerData;

  constructor(private route:ActivatedRoute, private customer : DataCustomerSoService) {

    let  salesID = this.route.snapshot.paramMap.get('salesID');

    this.customer.getData(salesID).subscribe(


      (data)=>{

        this.customerData = data;

      }, 

      (err)=> {

        console.log(err);
      }
    );

    
   }

  ngOnInit() {
  }



}
