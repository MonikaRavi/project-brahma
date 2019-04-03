import { Routes, RouterModule } from '@angular/router';

import { UploadImageComponent } from './upload-image/upload-image.component';


export const routes: Routes = [
    {
        path: 'uploadCloudinary',
        component: UploadImageComponent
    
      }
];

export const cloudinaryRouting = RouterModule.forChild(routes);