import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import { DistributorComponent } from "./distributor/distributor.component";
import { OpportunityComponent } from "./opportunity/opportunity.component";


export const routes: Routes = [

 
  // {
  //   path: '', redirectTo: 'distributor', pathMatch: 'full'
  // },
  {
    path: 'distributor',
    component: DistributorComponent
     
  },
  {
    path: 'opportunity',
    component: OpportunityComponent,
  }
];

export const routing = RouterModule.forChild(routes);