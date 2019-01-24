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
    FreightDetailComponent
  ],
  providers: [
    DataCustomerSoService,
    DataSalesService,
    DataSfDetailService,
    SaveSalesService,
    DataFreightviewService
  ]
})
export class ReportsModule { }
