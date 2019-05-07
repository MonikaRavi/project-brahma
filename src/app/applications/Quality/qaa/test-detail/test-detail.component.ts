import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestDetailService } from 'app/shared/data/MySql/QAA/test-detail.service';

import * as jsPDF from 'jspdf';

import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  testID;

  testLine ;

  lineSource;

  status;

  testDate;

  productName;

  productID;

  Qty;

  workCell ;

  parentRoute ;

  isDataAvailable : boolean = false;

  isError : boolean = false;

  dataRetrieved;

  overallTestStatus;

  constructor(private route: ActivatedRoute, private testDetailService : TestDetailService,private router: Router) {

    this.lineSource = JSON.parse(this.route.snapshot.paramMap.get('lineData'));


    this.testID = this.lineSource.testID;

    this.status = this.lineSource.Status;

    this.testDate = this.lineSource.Date;

    this.productName = this.lineSource.Product;

    this.testDetailService.getData(this.testID).subscribe(

      (data)=>{

        this.dataRetrieved = data;

        this.testLine = data.testData;

            if(this.testLine.length !== 0){

          this.productID = this.testLine[0].modelID;
          this.Qty = this.testLine[0].Qty;
          this.workCell = this.testLine[0].workCell;
        }

        if(data.OverallTestStatus === 0 ){

          this.overallTestStatus = 'Failed';

        } else {

          this.overallTestStatus = 'Passed';
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


  editLines(){

   
    this.router.navigate(['../../createLines',JSON.stringify(this.dataRetrieved)], { relativeTo: this.route,skipLocationChange: true });


  }

  downloadPDF(){

    let Test = this.testID;

  
    html2canvas(document.getElementById('TestDetail')).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      var Header = `Test Detail - ${Test}`;
      var Footer = "Haws Corp"
      doc.setTextColor(0,0,0);
      doc.setFontSize(15);
      doc.text(Header,3,15);
      doc.addImage(img,'JPEG',3,20,200,100);
      doc.setTextColor(128,128,128);
      doc.setFontSize(10);
      doc.text(Footer,180,150);
      let fileName = 'Test-' + Test
      doc.save(`${fileName}.pdf`);
      });


  }

}
