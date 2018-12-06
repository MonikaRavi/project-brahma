import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import { reportDashboard } from "app/reports/dashboard/dashboard.component";


export const routes: Routes = [

 
  {
    path: '', redirectTo: 'reportDashboard', pathMatch: 'full'
  },
  {
    path: 'reportDashboard',
    component: reportDashboard
     
  }
];

export const routing = RouterModule.forChild(routes);