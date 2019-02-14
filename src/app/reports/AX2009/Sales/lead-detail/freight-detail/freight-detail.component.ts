import { Component, OnInit } from '@angular/core';
import { DataFreightviewService } from 'app/shared/data/FreightView/data-freightview.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';


@Component({
  selector: 'app-freight-detail',
  templateUrl: './freight-detail.component.html',
  styleUrls: ['./freight-detail.component.css']
})
export class FreightDetailComponent implements OnInit {

  isDataAvailable: boolean = false;

  freight;

  status;

  pickupDate;

  history;

  latestDate;

  latestSummary;

  charges;

  isCharge: boolean;

  isCanceled: boolean = false;

  isScheduled: boolean = false;

  isOtherStatus: boolean = false;

  constructor(private freightData: DataFreightviewService, private salesID: SaveSalesService) { }

  ngOnInit() {


    let salesOrder = this.salesID.getSalesID();

    this.freightData.getData(salesOrder).subscribe(

      (data) => {

        if (data.length !== 0) {

          this.freight = data;

          this.isDataAvailable = true;

          this.status = data.status;

          this.pickupDate = data.pickupDate;

          /*** Tracking  ***/

          if ( data.tracking) {

            if(data.tracking.length !== 0){

              this.history = data.tracking;

              for (let index = 0; index < 1; index++) {
  
                this.latestDate = this.history[index].createdDate;
  
                this.latestSummary = this.history[index].summary;
  
              }

            }
           
          }

          /** Status **/

          if (this.status.search("cancel") === -1) {

            //Not canceled

            if (this.status.search("schedule") === -1) {

              //Not scheduled

              this.isOtherStatus = true;
            } else {

              //scheduled

              this.isScheduled = true;

            }


          } else {

            //canceled

            this.isCanceled = true;

          }

          /** Charges  **/

          
          if (data.charges && data.charges.length !== 0) {

            this.charges = data.charges;

            this.isCharge = true;

          } else {

            this.isCharge = false;
          }


        } else {

          this.isDataAvailable = false;

        }


      }, (err) => console.log(err)
    )

  }

}
