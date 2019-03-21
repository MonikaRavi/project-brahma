import { Routes, RouterModule } from '@angular/router';
import { DistributorComponent } from "./distributor/distributor.component";
import { OpportunityComponent } from "./opportunity/opportunity.component";
import { CustomerGuard } from "app/+user-role/guards/customer-guard.service";



export const routes: Routes = [


  // {
  //   path: '', redirectTo: 'distributor', pathMatch: 'full'
  // },
  {
    path: 'distributor',
    component: DistributorComponent,
    canActivate: [CustomerGuard]

  },
  {
    path: 'opportunity',
    component: OpportunityComponent,
    canActivate: [CustomerGuard]
  }
];

export const routing = RouterModule.forChild(routes);