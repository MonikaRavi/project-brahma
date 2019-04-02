import { Routes, RouterModule } from '@angular/router';

import { UploadImageComponent } from './upload-image/upload-image.component';
import { DropzoneShowcaseComponent } from 'app/+forms/+dropzone-showcase/dropzone-showcase.component';

export const routes: Routes = [
    {
        path: 'uploadCloudinary',
        component: UploadImageComponent
    
      },
      {
        path: 'uploadDefault',
        loadChildren: 'app/+forms/+dropzone-showcase/dropzone-showcase.module#DropzoneShowcaseModule',
        data: {pageTitle: 'Dropzone'}
      }
];

export const routing = RouterModule.forChild(routes);