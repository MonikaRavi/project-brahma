import { Routes, RouterModule } from '@angular/router';
import { SmartsheetComponent } from './smartsheet/smartsheet.component';
import { GanttComponent } from './gantt/gantt.component';




export const routes: Routes = [
    {
        path: 'smartsheetDashboard',
        component: SmartsheetComponent
    
      },

      {

        path: 'ganttChart',
        component : GanttComponent

      }
];

export const smartsheetRouting = RouterModule.forChild(routes);