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
    component: LeadsComponent

  },
  {

    path: 'leadDetail/:salesID',
    component: LeadDetailComponent

  },
  {
    path: 'avlisSales',
    component: AvlisSalesComponent
  },
  {
    path: 'avlisSalesdetail/:SalesID',
    component: AvlisSalesDetailComponent
  },

  {
    path: 'OnHand',
    component: OnHandComponent
  },

  {

    path: 'invoiceDetail',
    component: InvoiceDetailComponent

  },
  {
    path: 'avlisInvoiceDetail',
    component: AvlisInvoiceComponent
  }
];

export const routing = RouterModule.forChild(routes);