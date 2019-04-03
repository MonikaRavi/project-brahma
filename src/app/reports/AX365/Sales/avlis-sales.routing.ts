
import { Routes, RouterModule } from '@angular/router';
import { AvlisSalesComponent } from './avlis-sales/avlis-sales.component';
import { SalesGuard } from 'app/+user-role/guards/sales-guard.service';
import { AvlisSalesDetailComponent } from './avlis-sales-detail/avlis-sales-detail.component';
import { AvlisInvoiceComponent } from './avlis-invoice/avlis-invoice.component';




export const routes: Routes = [

    {
        path: 'avlisSales',
        component: AvlisSalesComponent,
        canActivate: [SalesGuard]
    
      },
      {
        path: 'avlisSalesdetail/:SalesID',
        component: AvlisSalesDetailComponent,
        canActivate: [SalesGuard]
    
      },
    
      {
        path: 'avlisInvoiceDetail',
        component: AvlisInvoiceComponent,
        canActivate: [SalesGuard]
    
      },
  
 
  
];

export const AvlisSalesrouting = RouterModule.forChild(routes);