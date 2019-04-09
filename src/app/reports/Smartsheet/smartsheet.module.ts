import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartsheetComponent } from './smartsheet/smartsheet.component';
import { smartsheetRouting } from './smartsheet.routing';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartsheetService } from 'app/shared/data/smartsheet/smartsheet.service';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import {ChartModule} from 'angular-highcharts';
import { GanttComponent } from './gantt/gantt.component'
import { TaskService } from './gantt/services/task.service';
import { LinkService } from './gantt/services/link.service';
import { GanttChartService } from 'app/shared/data/smartsheet/gantt-chart.service';



@NgModule({
  imports: [
    CommonModule,
    smartsheetRouting,
    SmartadminModule,
    ChartModule,
    I18nModule,
   
  ],
  declarations: [SmartsheetComponent, GanttComponent],
  providers: [
    SmartsheetService,
    TaskService,
    LinkService,
    GanttChartService
  ]
})
export class SmartsheetModule { }
