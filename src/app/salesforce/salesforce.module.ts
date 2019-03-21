import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { DistributorComponent } from './distributor/distributor.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './salesforce.routing';






@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
  DistributorComponent,
  OpportunityComponent
  ]
})
export class SalesforceModule { }
