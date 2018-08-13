import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SmartadminLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";
import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';

@NgModule({
  imports: [
    CommonModule,
    DomainRoutingModule,

    SmartadminLayoutModule,
		StatsModule,
  ],
  declarations: [DomainComponent]
})
export class DomainModule { }
