import { Routes, RouterModule } from '@angular/router';
import { QaaComponent } from './qaa.component';
import { TestDetailComponent } from './test-detail/test-detail.component';





export const routes: Routes = [
      {
        path: 'qaaMain',
        component: QaaComponent
    
      },

      {
        path: 'qaaDetail/:testID/:Product/:Status/:Date',
        component : TestDetailComponent
      }

];

export const QaaRouting = RouterModule.forChild(routes);