import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CampPage } from './camp.page';
import { CampRouteModule } from './camp-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampRouteModule
  ],
  declarations: [CampPage],
  exports: [CampRouteModule]
})
export class CampPageModule {}
