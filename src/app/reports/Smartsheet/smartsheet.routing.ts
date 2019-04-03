import { Routes, RouterModule } from '@angular/router';
import { SmartsheetComponent } from './smartsheet/smartsheet.component';




export const routes: Routes = [
    {
        path: 'smartsheetDashboard',
        component: SmartsheetComponent
    
      }
];

export const smartsheetRouting = RouterModule.forChild(routes);