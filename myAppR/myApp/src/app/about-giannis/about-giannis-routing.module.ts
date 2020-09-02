import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutGiannisPage } from './about-giannis.page';

const routes: Routes = [
  {
    path: '',
    component: AboutGiannisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutGiannisPageRoutingModule {}
