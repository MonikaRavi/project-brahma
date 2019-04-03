
import { Routes, RouterModule } from '@angular/router';


import { LeadsComponent } from './leads/leads.component';
import { LeadDetailComponent } from './lead-detail/lead-detail.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { SalesGuard } from 'app/+user-role/guards/sales-guard.service';



export const routes: Routes = [

  {
    path: 'leads',
    component: LeadsComponent,
    canActivate: [SalesGuard]

  },
  {

    path: 'leadDetail/:salesID',
    component: LeadDetailComponent,
    canActivate: [SalesGuard]

  },
 
  {

    path: 'invoiceDetail',
    component: InvoiceDetailComponent,
    canActivate: [SalesGuard]

  },
 
  
 
  
];

export const SparksSalesrouting = RouterModule.forChild(routes);