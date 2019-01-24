import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {AccordionModule} from "ngx-bootstrap";
import { generalElementsRouting } from './general-elements.routing';
import { GeneralElementsComponent } from './general-elements.component';

@NgModule({
  imports: [
    CommonModule,
    generalElementsRouting,
    SmartadminModule,
    AccordionModule.forRoot()
  ],
  declarations: [GeneralElementsComponent]
})
export class GeneralElementsModule { }
