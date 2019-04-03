import { Routes, RouterModule } from '@angular/router';




export const routes: Routes = [

  {
    path: 'sales',
    loadChildren: 'app/reports/AX365/Sales/avlis-sales.module#AvlisSalesModule',
    data: { pageTitle: 'Reports Dashboard' }

  },

  
  
];

export const Avlisrouting = RouterModule.forChild(routes);