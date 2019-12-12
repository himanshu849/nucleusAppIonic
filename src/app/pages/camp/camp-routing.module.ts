import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedCampPage } from './assigned-camp/assigned-camp.page';
import { CampPage } from './camp.page';

const routes: Routes = [
    {
      path: '',
      component: CampPage,
      children: [
        {
          path: 'assignedCamp',
          children: [
            {
              path: '',
              loadChildren:
                './assigned-camp/assigned-camp.module#AssignedCampPageModule'
            },
          ]
        },
        {
          path: 'completed-camp',
          children: [
            {
              path: '',
              loadChildren:
                './completed-camp/completed-camp.module#CompletedCampPageModule'
            }
          ]
        },
        {
          path: 'tracking-camp',
          children: [
            {
              path: '',
              loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: 'assignedCamp',
          pathMatch: 'full'
        }
      ]
    },

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CampRouteModule {

}