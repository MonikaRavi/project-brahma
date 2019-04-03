import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';
import { SmartadminInputModule } from 'app/shared/forms/input/smartadmin-input.module';

import { routing } from './reports.routing';
import { reportDashboard } from './dashboard/dashboard.component';

import { SaveSalesService } from 'app/shared/data/AX2009/Sales/save-sales.service';
import { InventoryListService } from 'app/shared/data/AX2009/Inventory/inventory-list.service';


import { I18nModule } from 'app/shared/i18n/i18n.module';
import { CloudinaryModule } from './Cloudinary/cloudinary.module';
import { AmericasModule } from './AX2009/americas.module';
import { AvlisModule } from './AX365/avlis.module';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    I18nModule,
    SmartadminDatatableModule,
    SmartadminInputModule,
    ReactiveFormsModule,
    routing,
    AccordionModule.forRoot(),
    CarouselModule,
    CloudinaryModule,
    AmericasModule,
    AvlisModule
  ],
  declarations: [
    reportDashboard,
    
  ],
  providers: [
   
    SaveSalesService,
    InventoryListService,
 
    
  ]
})
export class ReportsModule { }
