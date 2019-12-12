import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registeration', loadChildren: () => import('./pages/user/registeration/registeration.module').then(m => m.RegisterationPageModule)},
  { path: 'login', loadChildren: () => import('./pages/user/login/login.module').then(m => m.LoginPageModule) },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'camp', loadChildren: './pages/camp/camp.module#CampPageModule' },
  { path: 'camp-tabs', loadChildren: './pages/camp-tabs/camp-tabs.module#CampTabsPageModule' },
  { path: 'camp-details', loadChildren: './pages/camp-tabs/camp-details/camp-details.module#CampDetailsPageModule' },
  { path: 'camp-history', loadChildren: './pages/camp-tabs/camp-history/camp-history.module#CampHistoryPageModule' },
  // { path: 'assigned-camp', loadChildren: './camp/assigned-camp/assigned-camp.module#AssignedCampPageModule' },
  // { path: 'completed-camp', loadChildren: './camp/completed-camp/completed-camp.module#CompletedCampPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
