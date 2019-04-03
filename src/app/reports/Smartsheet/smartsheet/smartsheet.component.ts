import { Component, OnInit } from '@angular/core';
import { SmartsheetService } from 'app/shared/data/smartsheet/smartsheet.service';

import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-smartsheet',
  templateUrl: './smartsheet.component.html',
  styleUrls: ['./smartsheet.component.css']
})
export class SmartsheetComponent implements OnInit {

  isDataAvailable: boolean = false;

  isError: boolean = false;

  ResourceName = [];

  Effort = [];

  headerArray = [];

  valueArray = [];

  dashboardTable = [];

  Period = ['Current Week', 'Week+1', 'Week+2', 'Week+3', 'Week+4', 'Week+5', 'Week+6', 'Week+7', 'Week+8', 'Week+9', 'Week+10', 'Week+11', 'Week+12']
  chart: Chart;


  constructor(private smartsheetService: SmartsheetService) {

    this.headerArray = [];

    this.smartsheetService.getEffort().subscribe(

      (data) => {

        this.headerArray.push("Primary");

        for (let index = 1; index < data.length; index++) {

          const element = data[index];

          /** Table Row Values */

          this.dashboardTable.push(data[index]);

          /** Chart Series - Resource Names */

          this.ResourceName.push(element.resource);

          /** Chart Series Value - Effort in Hours */

          this.Effort.push([
            element.current,
            element.week__1,
            element.week__2,
            element.week__3,
            element.week__4,
            element.week__5,
            element.week__6,
            element.week__7,
            element.week__8,
            element.week__9,
            element.week__10,
            element.week__11,
            element.week__12

          ])

        }

        /** Populating Table Column Names - Week and Employees */

        this.Period.forEach(weekName => {
          this.headerArray.push(weekName);
        });

        /** Removing the baseline from Table Rows */

        this.dashboardTable.splice(-1, 1);

        /** HighChart Series Data */

        let seriesData = [];

        for (let index = 0; index < this.ResourceName.length; index++) {

          seriesData.push({

            name: this.ResourceName[index],
            data: this.Effort[index]

          });

        }


        /** Configuring Chart **/

        this.chart = new Chart({
          chart: {
            type: 'line'
          },
          title: {
            text: 'Resource Availability '
          },
          credits: {
            enabled: false
          },

          yAxis: {

            title: {
              text: 'Hours'
            },
            
          crosshair: true,

          },

          xAxis: {
            categories: this.Period,
          crosshair: true,
          },

          series: seriesData
        });

        this.isDataAvailable = true;

      },
      (err) => {

        this.isError = true;

        this.isDataAvailable = false;

      }

    );



  }

  ngOnInit() {



  }



}
