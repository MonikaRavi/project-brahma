
import { Routes, RouterModule } from '@angular/router';

import { MarketingGuard } from 'app/+user-role/guards/marketing-guard.service';
import { ProjectGuard } from 'app/+user-role/guards/project-guard.service';


export const routes: Routes = [

  {
    path: 'americas',
    loadChildren: 'app/reports/AX2009/americas.module#AmericasModule',
    data: { pageTitle: 'North America - Reports Dashboard' }

  },

  {
    path: 'avlis',
    loadChildren: 'app/reports/AX365/avlis.module#AvlisModule',
    data: { pageTitle: 'Brazil - Reports Dashboard' }

  },
  
  {
    path: 'cloudinary',
    loadChildren: 'app/reports/Cloudinary/cloudinary.module#CloudinaryModule',
    data: { pageTitle: 'Reports Dashboard' },
    canActivate : [MarketingGuard]
  },
  {
    path: 'smartsheet',
    loadChildren: 'app/reports/Smartsheet/smartsheet.module#SmartsheetModule',
    data: { pageTitle: 'Smartsheet Dashboard' },
    canActivate : [ProjectGuard]
  },
  
];

export const routing = RouterModule.forChild(routes);