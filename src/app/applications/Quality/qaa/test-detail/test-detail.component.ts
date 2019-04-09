import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestDetailService } from 'app/shared/data/MySql/QAA/test-detail.service';



@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  testID;

  testLine ;

  status;

  testDate;

  productName;

  productID;

  Qty;

  workCell ;

  isDataAvailable : boolean = false;

  isError : boolean = false;

  constructor(private route: ActivatedRoute, private testDetailService : TestDetailService) {


    this.testID = this.route.snapshot.paramMap.get('testID');

    this.status = this.route.snapshot.paramMap.get('Status');

    this.testDate = this.route.snapshot.paramMap.get('Date');

    this.productName = this.route.snapshot.paramMap.get('Product');

    this.testDetailService.getData(this.testID).subscribe(

      (data)=>{

        this.testLine = data;

        if(this.testLine.length !== 0){

          this.productID = this.testLine[0].ProductID;
          this.Qty = this.testLine[0].Qty;
          this.workCell = this.testLine[0].WorkCell;
        }

        this.isDataAvailable = true;

      },

      (err)=>{

        this.isError = true;

        console.log(err);

      }

    )

   
   }

  ngOnInit() {
  }

}
