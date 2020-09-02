import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwareDevelopmentPagePageRoutingModule } from './software-development-page-routing.module';

import { SoftwareDevelopmentPagePage } from './software-development-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftwareDevelopmentPagePageRoutingModule
  ],
  declarations: [SoftwareDevelopmentPagePage]
})
export class SoftwareDevelopmentPagePageModule {}
