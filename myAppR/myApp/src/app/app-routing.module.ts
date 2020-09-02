import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'software-development-page',
    loadChildren: () => import('./software-development-page/software-development-page.module').then( m => m.SoftwareDevelopmentPagePageModule)
  },
  {
    path: 'customer-support-page',
    loadChildren: () => import('./customer-support-page/customer-support-page.module').then( m => m.CustomerSupportPagePageModule)
  },
  {
    path: 'mobile-application-page',
    loadChildren: () => import('./mobile-application-page/mobile-application-page.module').then( m => m.MobileApplicationPagePageModule)
  },
  {
    path: 'technologies-page',
    loadChildren: () => import('./technologies-page/technologies-page.module').then( m => m.TechnologiesPagePageModule)
  },
  {
    path: 'about-giannis',
    loadChildren: () => import('./about-giannis/about-giannis.module').then( m => m.AboutGiannisPageModule)
  },
  {
    path: 'about-kostas',
    loadChildren: () => import('./about-kostas/about-kostas.module').then( m => m.AboutKostasPageModule)
  },
  {
    path: 'about-theo',
    loadChildren: () => import('./about-theo/about-theo.module').then( m => m.AboutTheoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
