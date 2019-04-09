import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaaModule } from './Quality/qaa/qaa.module';
import { applicationRouting } from './applications.routing';
import { I18nModule } from 'app/shared/i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    QaaModule,
    applicationRouting
  ],
  declarations: [],
  providers : [
   
  ]
})
export class ApplicationsModule { }
