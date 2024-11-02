import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BootScreenPageRoutingModule } from './boot-screen-routing.module';

import { BootScreenPage } from './boot-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BootScreenPageRoutingModule
  ],
  declarations: [BootScreenPage]
})
export class BootScreenPageModule {}
