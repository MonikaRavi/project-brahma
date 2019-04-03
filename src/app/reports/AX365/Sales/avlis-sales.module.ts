import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvlisSalesComponent } from './avlis-sales/avlis-sales.component';
import { AvlisSalesDetailComponent } from './avlis-sales-detail/avlis-sales-detail.component';
import { AvlisSalesLinesComponent } from './avlis-sales-detail/sales-detail/avlis-sales-lines.component';
import { AvlisInvoiceComponent } from './avlis-invoice/avlis-invoice.component';
import { AvlisInvoiceDetailComponent } from './avlis-invoice/avlis-invoice-detail/avlis-invoice-detail.component';
import { AvlisInvoiceHeaderComponent } from './avlis-invoice/avlis-invoice-header/avlis-invoice-header.component';
import { AvlisInvoiceHeaderService } from 'app/shared/data/AX365/Invoice/avlis-invoice-header.service';
import { AvlisInvoiceDetailService } from 'app/shared/data/AX365/Invoice/avlis-invoice-detail.service';
import { AvlisSalesListService } from 'app/shared/data/AX365/avlis-sales-list.service';
import { AvlisSalesDetailService } from 'app/shared/data/AX365/avlis-sales-detail.service';
import { AvlisCustomerSoService } from 'app/shared/data/AX365/avlis-customer-so.service';
import { AvlisSalesrouting } from './avlis-sales.routing';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from 'app/shared/forms/input/smartadmin-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AvlisSalesrouting,
    SmartadminModule,
    I18nModule,
    SmartadminDatatableModule,
    SmartadminInputModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    CarouselModule,
  ],
  declarations: [
    AvlisSalesComponent,
    AvlisSalesDetailComponent,
    AvlisSalesLinesComponent,
    AvlisInvoiceComponent,
    AvlisInvoiceDetailComponent,
    AvlisInvoiceHeaderComponent

  ],
  providers:[
    AvlisInvoiceHeaderService,
    AvlisInvoiceDetailService,
    AvlisSalesListService,
    AvlisSalesDetailService,
    AvlisCustomerSoService,
  ]
})
export class AvlisSalesModule { }
