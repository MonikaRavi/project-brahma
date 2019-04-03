import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from 'app/shared/forms/input/smartadmin-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';
import { AvlisSalesModule } from './Sales/avlis-sales.module';
import { Avlisrouting } from './avlis.routing';

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
    AvlisSalesModule,
    Avlisrouting
  ],
  declarations: [
    
  ]
})
export class AvlisModule { }
