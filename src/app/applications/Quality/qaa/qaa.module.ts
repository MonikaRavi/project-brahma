import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaaComponent } from './qaa.component';
import { QaaRouting } from './qaa.routing';
import { TestListComponent } from './test-list/test-list.component';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import { TestListService } from 'app/shared/data/MySql/QAA/test-list.service';
import { TestIdService } from 'app/shared/data/MySql/QAA/test-id.service';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { InlineGraphsModule } from 'app/shared/graphs/inline/inline-graphs.module';
import { TestDetailService } from 'app/shared/data/MySql/QAA/test-detail.service';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminWidgetsModule } from 'app/shared/widgets/smartadmin-widgets.module';
import { StatsModule } from 'app/shared/stats/stats.module';
import { SmartadminLayoutModule } from 'app/shared/layout';
import { CreateTestComponent } from './create-test/create-test.component';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminValidationModule } from 'app/shared/forms/validation/smartadmin-validation.module';
import { BootstrapValidationModule } from 'app/+forms/+bootstrap-validation/bootstrap-validation.module';
import { GetLocationQaaService } from 'app/shared/data/MySql/QAA/get-location-qaa.service';
import { GetModelQaaService } from 'app/shared/data/MySql/QAA/get-model-qaa.service';
import { GetUsersQaaService } from 'app/shared/data/MySql/QAA/get-users-qaa.service';
import { CreateTestlineComponent } from './create-testline/create-testline.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    InlineGraphsModule,
    SmartadminDatatableModule,
    SmartadminWidgetsModule,
    StatsModule,
    SmartadminLayoutModule,
    SmartadminModule,
    SmartadminValidationModule,
    BootstrapValidationModule,
    QaaRouting
  ],
  declarations: [QaaComponent, TestListComponent, TestDetailComponent, CreateTestComponent, CreateTestlineComponent],
  providers:[
    TestListService,
    TestIdService,
    TestDetailService,
    GetLocationQaaService,
    GetModelQaaService,
    GetUsersQaaService
  ]
})
export class QaaModule { }
