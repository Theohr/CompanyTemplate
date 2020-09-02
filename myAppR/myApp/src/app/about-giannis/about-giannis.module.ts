import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutGiannisPageRoutingModule } from './about-giannis-routing.module';

import { AboutGiannisPage } from './about-giannis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutGiannisPageRoutingModule
  ],
  declarations: [AboutGiannisPage]
})
export class AboutGiannisPageModule {}
