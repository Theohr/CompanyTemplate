import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutTheoPage } from './about-theo.page';

const routes: Routes = [
  {
    path: '',
    component: AboutTheoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutTheoPageRoutingModule {}
