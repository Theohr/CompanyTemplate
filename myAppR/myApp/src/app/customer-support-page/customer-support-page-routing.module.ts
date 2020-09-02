import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSupportPagePage } from './customer-support-page.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSupportPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSupportPagePageRoutingModule {}
