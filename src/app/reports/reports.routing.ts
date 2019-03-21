import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { reportDashboard } from "app/reports/dashboard/dashboard.component";
import { LeadsComponent } from "./AX2009/Sales/leads/leads.component";
import { LeadDetailComponent } from "./AX2009/Sales/lead-detail/lead-detail.component";
import { AvlisSalesComponent } from "./AX365/avlis-sales/avlis-sales.component";
import { AvlisSalesDetailComponent } from "./AX365/avlis-sales-detail/avlis-sales-detail.component";
import { OnHandComponent } from "./AX2009/Inventory/on-hand/on-hand.component";
import { InvoiceDetailComponent } from "./AX2009/Sales/invoice-detail/invoice-detail.component";
import { AvlisInvoiceComponent } from "./AX365/avlis-invoice/avlis-invoice.component";
import { SalesGuard } from "app/+user-role/guards/sales-guard.service";
import { InventoryGuard } from "app/+user-role/guards/inventory-guard.service";






export const routes: Routes = [


  // {
  //   path: '', redirectTo: 'reportDashboard', pathMatch: 'full'
  // },
  // {
  //   path: 'reportDashboard',
  //   component: reportDashboard

  // },
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
    path: 'OnHand',
    component: OnHandComponent,
    canActivate: [InventoryGuard]
  },

  {

    path: 'invoiceDetail',
    component: InvoiceDetailComponent,
    canActivate: [SalesGuard]


  },
  {
    path: 'avlisInvoiceDetail',
    component: AvlisInvoiceComponent,
    canActivate: [SalesGuard]

  }
];

export const routing = RouterModule.forChild(routes);