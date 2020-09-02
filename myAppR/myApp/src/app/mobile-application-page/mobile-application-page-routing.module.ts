import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileApplicationPagePage } from './mobile-application-page.page';

const routes: Routes = [
  {
    path: '',
    component: MobileApplicationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileApplicationPagePageRoutingModule {}
