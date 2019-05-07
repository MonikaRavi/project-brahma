import { Component, OnInit } from '@angular/core';
import { TestListService } from 'app/shared/data/MySql/QAA/test-list.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})



export class TestListComponent implements OnInit {



  inspectionList = [];

  isDataAvailable: boolean = false;

  isError: boolean = false;

  options;



  constructor(private testListService: TestListService,private router: Router, private route: ActivatedRoute) {

    this.testListService.getData().subscribe(

      (data) => {

        //  console.log(data);

        this.isError = false;

        /** Formatting Data for the widget */

        data.forEach(element => {

          let statusElement: any;

          /** Status Element  **/

          if (element.Status === 'Passed') {

            statusElement = `<span class='label label-success'>${element.Status}</span>`

          } else {
            statusElement = `<span class='label label-danger'>${element.Status}</span>`

          }

          // Test line detail will be called from DatatableComponent -> using the action (shared -> ui -> datatable)
 
let Action = '<button class="btn-primary"> View Lines </button>'

          this.inspectionList.push({
            testID: element.testID,
            InspectionDate: element.InspectionDate,
            EmployeeName: element.EmployeeName,
            Status: statusElement,
            ProductID: element.ProductID,
            Product: element.Product,
            QuantityInspected: element.QuantityInspected,
            Action : Action,
            StatusOriginal : element.Status
          })

        });



        this.options = {
          "data": this.inspectionList,
          "iDisplayLength": 15,
          "columns": [
            {
              "class": 'details-control',
              "orderable": false,
              "data": null,
              "defaultContent": ''
            },
            { "data": "testID" },
            { "data": "InspectionDate" },
            { "data": "Status" },
            { "data": "ProductID" }
            // ,{
            //   "render": function (data) {
            //     return '<button class="btn-primary" *ngIf="Status === Failed" data-name="' + data + '"> View Lines </button>';
            //   }
            // }
          ],
          "order": [[1, 'asc']]
        }

        //   console.log(this.inspectionList);

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



  public detailsFormat(d) {


    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody><tr>
                <td style="width:100px"> <strong> Product ID </strong> </td>
                <td>${d.ProductID}</td>
            </tr>
            <tr>
                <td><strong>Product Name:</strong></td>
                <td>${d.Product}</td>
            </tr>
            <tr>
                <td><strong>Inspected By </strong></td>
                <td>${d.EmployeeName}</td>
            </tr>
            <tr>
                <td><strong> Quantity </strong></td>
                <td>${d.QuantityInspected}</td>
            </tr>
            <tr>
                <td><strong> Action </strong></td>
                <td>${d.Action}</td>
            </tr>
         </tbody>
        </table>`
  }

  CreateTestCase(){

    //console.log(this.route.url);

    this.router.navigate(['../createTest'], { relativeTo: this.route });

  }

}
