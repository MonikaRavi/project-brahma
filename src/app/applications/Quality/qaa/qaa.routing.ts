import { Routes, RouterModule } from '@angular/router';
import { QaaComponent } from './qaa.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreateTestlineComponent } from './create-testline/create-testline.component';
import { TestListComponent } from './test-list/test-list.component';





export const routes: Routes = [
  {
    path: '',
    redirectTo: 'qaaMain',
    pathMatch: 'full'
  },

  {
    path: 'qaaMain',
    component: TestListComponent

  },

  {
    path: 'qaaDetail/:lineData',
    component: TestDetailComponent
  },
  {
    path: 'createTest',
    component: CreateTestComponent
  },
  {
    path: 'createLines/:lineData',
    component: CreateTestlineComponent
  }

];

export const QaaRouting = RouterModule.forChild(routes);