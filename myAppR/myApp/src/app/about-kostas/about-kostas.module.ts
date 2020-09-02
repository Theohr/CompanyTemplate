import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutKostasPageRoutingModule } from './about-kostas-routing.module';

import { AboutKostasPage } from './about-kostas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutKostasPageRoutingModule
  ],
  declarations: [AboutKostasPage]
})
export class AboutKostasPageModule {}
