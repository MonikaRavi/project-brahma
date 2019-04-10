import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaaModule } from './Quality/qaa/qaa.module';
import { applicationRouting } from './applications.routing';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import { PostTestDataService } from 'app/shared/data/MySql/QAA/post-test-data.service';
import { CheckFormValidService } from './Quality/qaa/create-test/check-form-valid.service';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    QaaModule,
    applicationRouting
  ],
  declarations: [],
  providers : [
    CheckFormValidService,
   PostTestDataService
  ]
})
export class ApplicationsModule { }
