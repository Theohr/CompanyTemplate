import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologiesPagePageRoutingModule } from './technologies-page-routing.module';

import { TechnologiesPagePage } from './technologies-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologiesPagePageRoutingModule
  ],
  declarations: [TechnologiesPagePage]
})
export class TechnologiesPagePageModule {}
