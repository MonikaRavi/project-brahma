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

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    InlineGraphsModule,
    SmartadminDatatableModule,
    SmartadminWidgetsModule,
    StatsModule,
    SmartadminLayoutModule,
    QaaRouting
  ],
  declarations: [QaaComponent, TestListComponent, TestDetailComponent],
  providers:[
    TestListService,
    TestIdService,
    TestDetailService
  ]
})
export class QaaModule { }
