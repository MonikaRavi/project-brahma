import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { I18nModule } from 'app/shared/i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SmartadminModule,
    I18nModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
