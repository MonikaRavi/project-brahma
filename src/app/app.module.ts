import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Core providers
import { CoreModule } from "./core/core.module";
import { SmartadminLayoutModule } from "./shared/layout/layout.module";


import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeModule } from 'app/+home/home.module';
import { AuthService } from './+auth/auth.service';
import { HttpService } from './shared/smartadmin.http.service';
import { HomeService } from './+home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './+home/image.service';

import { AuthGuard } from './auth-guard.service';
import { DataRetrievalService } from './shared/data/IoT/data-retrieval.service';
import { DataSalesforceService } from './shared/data/Salesforce/data-salesforce.service';
import { DataSosummaryService } from './shared/data/AX2009/Sales/data-sosummary.service';
import { I18nService } from './shared/i18n';
import { UserRoleService } from './shared/data/MySql/user-role.service';
import { RoleService } from './+user-role/role.service';
import { CustomerGuard } from './+user-role/guards/customer-guard.service';
import { SalesGuard } from './+user-role/guards/sales-guard.service';
import { OperationsGuard } from './+user-role/guards/operations-guard.service';
import { InventoryGuard } from './+user-role/guards/inventory-guard.service';












// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AuthService,
  HttpService,
  HomeService,
  AuthGuard,
  CustomerGuard,
  SalesGuard,
  OperationsGuard,
  InventoryGuard
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent


  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CoreModule,
    SmartadminLayoutModule,
    HomeModule,
    routing

  ],
  exports: [

  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    APP_PROVIDERS,
    DataRetrievalService, DataSalesforceService, DataSosummaryService,
    ImageService,
    I18nService,
    RoleService,
    UserRoleService
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }


}

