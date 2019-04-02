import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { routing } from './cloudinary.routing';
import { I18nModule } from 'app/shared/i18n/i18n.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from 'app/shared/forms/input/smartadmin-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryListService } from 'app/shared/data/AX2009/Inventory/inventory-list.service';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { ProductImageUploadService } from 'app/shared/data/Cloudinary/product-image-upload.service';
import { NotificationService } from 'app/shared/utils/notification.service';


@NgModule({
  imports: [
    CommonModule,
    routing,
    I18nModule,
    SmartadminDatatableModule,
    SmartadminInputModule,
    ReactiveFormsModule,
    SmartadminModule,
    
  ],
  declarations: [UploadImageComponent],
  providers : [
    InventoryListService,
    ProductImageUploadService,
    NotificationService
  ]
})
export class CloudinaryModule { }
