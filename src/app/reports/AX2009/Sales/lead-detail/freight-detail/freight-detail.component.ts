import { Component, OnInit } from '@angular/core';
import { DataFreightviewService } from 'app/shared/data/FreightView/data-freightview.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';


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

        if(data!==[]){

          this.freight = data;

        //console.log(data);

        this.isDataAvailable = true;

        this.status = data.status;

        //console.log(this.status);

        this.pickupDate = data.pickupDate;

        if(data.tracking){

          this.history = data.tracking;

          for (let index = 0; index < 1; index++) {
            
            this.latestDate = this.history[index].createdDate;

            this.latestSummary = this.history[index].summary;
            
          }

         this.isCanceled = false;

        }

        } else {

          this.isDataAvailable = false;

        }

        

      
       // console.log(data);

     

      }, (err)=> console.log(err)
    )

  }

  


  

}
