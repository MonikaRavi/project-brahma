import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostTestLineService } from 'app/shared/data/MySql/QAA/post-test-line.service';

@Component({
  selector: 'app-create-testline',
  templateUrl: './create-testline.component.html',
  styleUrls: ['./create-testline.component.css']
})
export class CreateTestlineComponent implements OnInit {

  statusInput = [
    {
      "id": 1,
      "name": 'Passed'
    },
    {
      "id": 0,
      "name": 'Failed'
    }
  ]

  lineSource;

  testID;

  testStatus = 0;

  lineInput = [];

  model;


  constructor(private postTestLineService : PostTestLineService,private router: Router, private route: ActivatedRoute) {

    this.lineSource = JSON.parse(this.route.snapshot.paramMap.get('lineData')).testData;

    this.testStatus = JSON.parse(this.route.snapshot.paramMap.get('lineData')).OverallTestStatus;

    // If the route is from creating new test case

    if(this.lineSource == null){

      this.lineSource = JSON.parse(this.route.snapshot.paramMap.get('lineData'));

      this.testStatus = 0;

    }
 
    this.testID = this.lineSource[0].testID;

    this.model = this.lineSource[0].modelID;

   

  }

  ngOnInit() {



  }

  updateStatus(index){

    let dataHandled = this.lineSource[index];

    let actualStatus : number;

    if (+dataHandled.testData >= dataHandled.rangeLow && +dataHandled.testData <= dataHandled.rangeHigh){

      actualStatus = 1

    }else {

      actualStatus = 0
    }

    this.lineSource[index].testStatus = actualStatus;

  //  console.log(this.lineSource[index]);

  }

  onSubmit() {

    let dataInput = [];

    this.lineSource.forEach(element => {

      let lineJSON = {


        "TestCase": element.testID,
        "criteriaID": element.criteriaID,
        "rangeID": element.rangeID,
        "testData": element.testData,
        "testStatus": element.testStatus
      }

      dataInput.push(lineJSON);

     
    });

    let postLineData = {

      "testData": dataInput,
      "OverallTestStatus": this.testStatus

    }


    this.postTestLineService.createTestLine(postLineData).subscribe(

      (data)=>{

        this.router.navigate(['../../qaaMain'], { relativeTo: this.route});

      },

      (err)=>{

        console.log(err);
      }

    )

  }

  goToList(){

    this.router.navigate(['../../qaaMain'], { relativeTo: this.route});

  }





}
