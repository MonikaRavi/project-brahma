
import { Routes, RouterModule } from '@angular/router';
import { OnHandComponent } from './Inventory/on-hand/on-hand.component';
import { InventoryGuard } from 'app/+user-role/guards/inventory-guard.service';



export const routes: Routes = [

  {
    path: 'sales',
    loadChildren: 'app/reports/AX2009/Sales/sparks-sales.module#SparksSalesModule',
    data: { pageTitle: 'Reports Dashboard' }

  },

  
  {
    path: 'OnHand',
    component: OnHandComponent,
    canActivate: [InventoryGuard]
  },


  
];

export const Americasrouting = RouterModule.forChild(routes);