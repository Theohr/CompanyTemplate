import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSupportPagePageRoutingModule } from './customer-support-page-routing.module';

import { CustomerSupportPagePage } from './customer-support-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerSupportPagePageRoutingModule
  ],
  declarations: [CustomerSupportPagePage]
})
export class CustomerSupportPagePageModule {}
