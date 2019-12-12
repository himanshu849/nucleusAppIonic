import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssignedCampPage } from './assigned-camp.page';
import { CampListComponent } from './camp-list/camp-list.component';

const routes: Routes = [
  {
    path: '',
    component: AssignedCampPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssignedCampPage, CampListComponent]
})
export class AssignedCampPageModule {}
