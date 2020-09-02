import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareDevelopmentPagePage } from './software-development-page.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwareDevelopmentPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareDevelopmentPagePageRoutingModule {}
