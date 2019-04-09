
import { Routes, RouterModule } from '@angular/router';




export const routes: Routes = [


  {
    path: 'Qaa',
    loadChildren: 'app/applications/Quality/qaa/qaa.module#QaaModule',
    data: { pageTitle: 'QAA' }
    
  },
  
];

export const applicationRouting = RouterModule.forChild(routes);