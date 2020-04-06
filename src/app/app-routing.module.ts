import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  // },
  // {
  //   path: 'tab2',
  //   loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  // },
  // {
  //   path: 'details',
  //   loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  // },
  // {
  //   path: 'volunteer',
  //   loadChildren: () => import('./volunteer/volunteer.module').then( m => m.VolunteerPageModule)
  // },
  // {
  //   path: 'protection',
  //   loadChildren: () => import('./protection/protection.module').then( m => m.ProtectionPageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
