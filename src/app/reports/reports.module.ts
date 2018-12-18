import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './reports.routing';
import { reportDashboard } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadDetailComponent } from './lead-detail/lead-detail.component';
import { DataCustomerSoService } from 'app/shared/data/data-customer-so.service';
import { SalesDetailComponent } from './lead-detail/sales-detail/sales-detail.component';
import { SalesforceDetailComponent } from './lead-detail/salesforce-detail/salesforce-detail.component';
import { DataSalesService } from 'app/shared/data/data-sales.service';
import { DataSfDetailService } from 'app/shared/data/data-sf-detail.service';
import { SaveSalesService } from 'app/shared/data/save-sales.service';



@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    reportDashboard,
    LeadsComponent,
    LeadDetailComponent,
    SalesDetailComponent,
    SalesforceDetailComponent
  ],
  providers: [
    DataCustomerSoService,
    DataSalesService,
    DataSfDetailService,
    SaveSalesService
  ]
})
export class ReportsModule { }
