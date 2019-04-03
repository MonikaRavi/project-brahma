import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsComponent } from './leads/leads.component';
import { LeadDetailComponent } from './lead-detail/lead-detail.component';
import { SalesforceDetailComponent } from './lead-detail/salesforce-detail/salesforce-detail.component';
import { SalesDetailComponent } from './lead-detail/sales-detail/sales-detail.component';
import { FreightDetailComponent } from './lead-detail/freight-detail/freight-detail.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceHeaderComponent } from './invoice-detail/invoice-header/invoice-header.component';
import { DetailInvoiceComponent } from './invoice-detail/detail-invoice/detail-invoice.component';

import { SparksSalesrouting } from './sparks-sales.routing';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from 'app/shared/forms/input/smartadmin-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    I18nModule,
    SmartadminDatatableModule,
    SmartadminInputModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    CarouselModule,
    SparksSalesrouting
  ],
  declarations: [
    LeadsComponent,
    LeadDetailComponent,
    SalesforceDetailComponent,
    SalesDetailComponent,
    FreightDetailComponent,
    InvoiceDetailComponent,
    InvoiceHeaderComponent,
    DetailInvoiceComponent
  ]
})
export class SparksSalesModule { }
