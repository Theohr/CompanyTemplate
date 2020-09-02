import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologiesPagePage } from './technologies-page.page';

const routes: Routes = [
  {
    path: '',
    component: TechnologiesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologiesPagePageRoutingModule {}
