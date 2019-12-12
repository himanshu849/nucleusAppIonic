import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CampTabsPage } from './camp-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: CampTabsPage,

    children: [
      {
        path: 'camp-details',
        children: [
          {
            path: '',
            loadChildren: () => import('../camp-tabs/camp-details/camp-details.module').then(m => m.CampDetailsPageModule)
          }
        ]
      },
      {
        path: 'camp-history',
        children: [
          {
            path: '',
            loadChildren: () => import('../camp-tabs/camp-history/camp-history.module').then(m => m.CampHistoryPageModule)
          }
        ]

      },
      {
        path: '',
        redirectTo: 'camp-details',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CampTabsPage]
})
export class CampTabsPageModule {}
