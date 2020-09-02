import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileApplicationPagePageRoutingModule } from './mobile-application-page-routing.module';

import { MobileApplicationPagePage } from './mobile-application-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileApplicationPagePageRoutingModule
  ],
  declarations: [MobileApplicationPagePage]
})
export class MobileApplicationPagePageModule {}
