import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutTheoPageRoutingModule } from './about-theo-routing.module';

import { AboutTheoPage } from './about-theo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutTheoPageRoutingModule
  ],
  declarations: [AboutTheoPage]
})
export class AboutTheoPageModule {}
