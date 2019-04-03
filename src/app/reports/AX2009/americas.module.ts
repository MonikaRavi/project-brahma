import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparksSalesModule } from './Sales/sparks-sales.module';
import { Americasrouting } from './americas.routing';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from 'app/shared/forms/input/smartadmin-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';
import { OnHandComponent } from './Inventory/on-hand/on-hand.component';
import { DataCustomerSoService } from 'app/shared/data/AX2009/Sales/data-customer-so.service';
import { DataSalesService } from 'app/shared/data/AX2009/Sales/data-sales.service';
import { DataSfDetailService } from 'app/shared/data/AX2009/Sales/data-sf-detail.service';
import { DataFreightviewService } from 'app/shared/data/FreightView/data-freightview.service';
import { DataOnhandService } from 'app/shared/data/AX2009/Inventory/data-onhand.service';
import { InvoiceDetailService } from 'app/shared/data/AX2009/Invoice/invoice-detail.service';
import { InvoiceHeaderService } from 'app/shared/data/AX2009/Invoice/invoice-header.service';
import { ProductImageService } from 'app/shared/data/Cloudinary/product-image.service';

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
    SparksSalesModule,
    Americasrouting
  ],
  declarations: [
    
    OnHandComponent
  ],
  providers:[
    DataCustomerSoService,
    DataSalesService,
    DataSfDetailService,
    DataFreightviewService,
    DataOnhandService,
    InvoiceDetailService,
    InvoiceHeaderService,
    ProductImageService,
  ]
})
export class AmericasModule { }
