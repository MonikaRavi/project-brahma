import { Routes, RouterModule } from '@angular/router';
import { QaaComponent } from './qaa.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { CreateTestComponent } from './create-test/create-test.component';





export const routes: Routes = [
      {
        path: 'qaaMain',
        component: QaaComponent
    
      },

      {
        path: 'qaaDetail/:testID/:Product/:Status/:Date',
        component : TestDetailComponent
      },
      {
        path: 'createTest',
        component : CreateTestComponent
      }

];

export const QaaRouting = RouterModule.forChild(routes);