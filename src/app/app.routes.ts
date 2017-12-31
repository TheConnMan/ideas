import { Routes } from '@angular/router';

import { IdeaListComponent } from './github/idea-list/idea-list.component';
import { IdeaDetailComponent } from './github/idea-detail/idea-detail.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'ideas', pathMatch: 'full' },
  {
    path: 'ideas', component: IdeaListComponent
  },
  {
    path: 'ideas/:idea', component: IdeaDetailComponent
  }
];

