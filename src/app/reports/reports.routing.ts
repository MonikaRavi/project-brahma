import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import { reportDashboard } from "app/reports/dashboard/dashboard.component";
import { LeadsComponent } from "./AX2009/leads/leads.component";
import { LeadDetailComponent } from "./AX2009/lead-detail/lead-detail.component";




export const routes: Routes = [

 
  {
    path: '', redirectTo: 'reportDashboard', pathMatch: 'full'
  },
  {
    path: 'reportDashboard',
    component: reportDashboard
     
  },
  {
    path: 'leads',
    component: LeadsComponent
   
  },
  {

    path: 'leadDetail/:salesID',
    component: LeadDetailComponent

  }
];

export const routing = RouterModule.forChild(routes);