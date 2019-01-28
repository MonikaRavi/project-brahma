import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';

import { DataCustomerSoService } from 'app/shared/data/AX2009/Sales/data-customer-so.service';
import { DataSalesService } from 'app/shared/data/AX2009/Sales/data-sales.service';
import { DataSfDetailService } from 'app/shared/data/AX2009/Sales/data-sf-detail.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { DataFreightviewService } from 'app/shared/data/FreightView/data-freightview.service';


import { LeadsComponent } from './AX2009/leads/leads.component';
import { LeadDetailComponent } from './AX2009/lead-detail/lead-detail.component';
import { SalesDetailComponent } from './AX2009/lead-detail/sales-detail/sales-detail.component';
import { SalesforceDetailComponent } from './AX2009/lead-detail/salesforce-detail/salesforce-detail.component';
import { FreightDetailComponent } from './AX2009/lead-detail/freight-detail/freight-detail.component';

import { routing } from './reports.routing';
import { reportDashboard } from './dashboard/dashboard.component';
import { AvlisSalesComponent } from './AX365/avlis-sales/avlis-sales.component';
import { AvlisSalesDetailComponent } from './AX365/avlis-sales-detail/avlis-sales-detail.component';
import { AvlisSalesListService } from 'app/shared/data/AX365/avlis-sales-list.service';
import { AvlisSalesDetailService } from 'app/shared/data/AX365/avlis-sales-detail.service';
import { AvlisSalesLinesComponent } from './AX365/avlis-sales-detail/sales-detail/avlis-sales-lines.component';
import { AvlisCustomerSoService } from 'app/shared/data/AX365/avlis-customer-so.service';








@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
    ReactiveFormsModule,
    routing,
    AccordionModule.forRoot()
  ],
  declarations: [
    reportDashboard,
    LeadsComponent,
    LeadDetailComponent,
    SalesDetailComponent,
    SalesforceDetailComponent,
    FreightDetailComponent,
    AvlisSalesComponent,
    AvlisSalesDetailComponent,
    AvlisSalesLinesComponent
  ],
  providers: [
    DataCustomerSoService,
    DataSalesService,
    DataSfDetailService,
    SaveSalesService,
    DataFreightviewService,
    AvlisSalesListService,
    AvlisSalesDetailService,
    AvlisCustomerSoService
  ]
})
export class ReportsModule { }
