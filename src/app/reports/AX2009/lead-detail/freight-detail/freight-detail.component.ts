import { Component, OnInit } from '@angular/core';
import { DataFreightviewService } from 'app/shared/data/data-freightview.service';
import { SaveSalesService } from 'app/shared/data/save-sales.service';

@Component({
  selector: 'app-freight-detail',
  templateUrl: './freight-detail.component.html',
  styleUrls: ['./freight-detail.component.css']
})
export class FreightDetailComponent implements OnInit {

  isDataAvailable:boolean = false;

  freight;

  status;

  pickupDate;

  history;

  latestDate;

  latestSummary;

  isCanceled : boolean = true;

  constructor(private freightData : DataFreightviewService, private salesID : SaveSalesService) { }

  ngOnInit() {

    
    let salesOrder = this.salesID.getSalesID();

    this.freightData.getData(salesOrder).subscribe(

      (data)=>{

        this.freight = data;

        //console.log(data);

        this.isDataAvailable = true;

        if(!data.tracking){

          this.status = data.status;

          this.pickupDate = data.pickupDate;

        }else{

          this.status = data.tracking.status;

          this.pickupDate = data.tracking.pickupDateActual;

          this.history = data.tracking.history;

          for (let index = 0; index < 1; index++) {
            
            this.latestDate = this.history[index].eventDate;

            this.latestSummary = this.history[index].summary;
            
          }

         this.isCanceled = false;

        }

      
       // console.log(data);

     

      }, (err)=> console.log(err)
    )

  }

  


  

}
