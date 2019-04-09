import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';


import 'dhtmlx-gantt';

import { GanttChartService } from 'app/shared/data/smartsheet/gantt-chart.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-gantt',
  styleUrls: ['./gantt.component.css'],
  templateUrl : './gantt.component.html'
})
export class GanttComponent implements OnInit {

  @ViewChild('gantt_here') ganttContainer: ElementRef;

  isDataAvailable : boolean = false;

  isError : boolean = false;

  constructor(private ganttService : GanttChartService) { }

  ngOnInit() {

    gantt.config.xml_date = '%Y-%m-%d %H:%i';
    gantt.config.readonly = true;
    //console.log(gantt.config.columns);
    gantt.config.work_time = true;

    gantt.templates.scale_cell_class = function (date) {
      if (!gantt.isWorkTime(date)) {
        return "weekend";
      }
    };
    gantt.templates.task_cell_class = function (task, date) {
      if (!gantt.isWorkTime({ task: task, date: date })) {
        return "weekend";
      }
    };
    gantt.config.columns = [
      { name: "text", label: "Resource", width: "*", tree: true },
      { name: "start_date", label: "Start", align: "center" },
      { name: "end_date", label: "End", width: 100, align: "center" }];


    gantt.init(this.ganttContainer.nativeElement);

    this.ganttService.getChartData().subscribe(


      (data)=>{

       // console.log('Data ', data);

       this.isDataAvailable = true;
      		
        gantt.parse({ data });
      },

      (err)=>{

        this.isError = true;

        console.log(err);
      }
    )

 

  }

}
