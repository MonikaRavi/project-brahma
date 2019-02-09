import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { DataCustomerSoService } from 'app/shared/data/AX2009/Sales/data-customer-so.service';
import { DataSalesService } from 'app/shared/data/AX2009/Sales/data-sales.service';
import { DataSfDetailService } from 'app/shared/data/AX2009/Sales/data-sf-detail.service';
import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { DataFreightviewService } from 'app/shared/data/FreightView/data-freightview.service';
import { AvlisSalesListService } from 'app/shared/data/AX365/avlis-sales-list.service';
import { AvlisSalesDetailService } from 'app/shared/data/AX365/avlis-sales-detail.service';
import { AvlisCustomerSoService } from 'app/shared/data/AX365/avlis-customer-so.service';

import { routing } from './reports.routing';
import { reportDashboard } from './dashboard/dashboard.component';


import { LeadsComponent } from './AX2009/Sales/leads/leads.component';
import { LeadDetailComponent } from './AX2009/Sales/lead-detail/lead-detail.component';
import { SalesDetailComponent } from './AX2009/Sales/lead-detail/sales-detail/sales-detail.component';
import { SalesforceDetailComponent } from './AX2009/Sales/lead-detail/salesforce-detail/salesforce-detail.component';
import { FreightDetailComponent } from './AX2009/Sales/lead-detail/freight-detail/freight-detail.component';
import { AvlisSalesComponent } from './AX365/avlis-sales/avlis-sales.component';
import { AvlisSalesDetailComponent } from './AX365/avlis-sales-detail/avlis-sales-detail.component';
import { AvlisSalesLinesComponent } from './AX365/avlis-sales-detail/sales-detail/avlis-sales-lines.component';
import { OnHandComponent } from './AX2009/Inventory/on-hand/on-hand.component';
import { DataOnhandService } from 'app/shared/data/AX2009/Inventory/data-onhand.service';
import { InvoiceDetailComponent } from './AX2009/Sales/invoice-detail/invoice-detail.component';
import { InvoiceHeaderComponent } from './AX2009/Sales/invoice-detail/invoice-header/invoice-header.component';
import { DetailInvoiceComponent } from './AX2009/Sales/invoice-detail/detail-invoice/detail-invoice.component';
import { InvoiceDetailService } from 'app/shared/data/AX2009/Invoice/invoice-detail.service';
import { InvoiceHeaderService } from 'app/shared/data/AX2009/Invoice/invoice-header.service';
import { InventoryListService } from 'app/shared/data/AX2009/Inventory/inventory-list.service';
import { SmartadminInputModule } from 'app/shared/forms/input/smartadmin-input.module';
import { ProductImageService } from 'app/shared/data/Cloudinary/product-image.service';
import { CheckCloudinaryService } from 'app/shared/data/AX2009/Inventory/check-cloudinary.service';




@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
    SmartadminInputModule,
    ReactiveFormsModule,
    routing,
    AccordionModule.forRoot(),
    CarouselModule
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
    AvlisSalesLinesComponent,
    OnHandComponent,
    InvoiceDetailComponent,
    InvoiceHeaderComponent,
    DetailInvoiceComponent
  ],
  providers: [
    DataCustomerSoService,
    DataSalesService,
    DataSfDetailService,
    SaveSalesService,
    DataFreightviewService,
    AvlisSalesListService,
    AvlisSalesDetailService,
    AvlisCustomerSoService,
    DataOnhandService,
    InvoiceDetailService,
    InvoiceHeaderService,
    InventoryListService,
    ProductImageService,
    CheckCloudinaryService
  ]
})
export class ReportsModule { }
