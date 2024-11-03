import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PickupCallCardComponent } from '../components/pickup-call-card/pickup-call-card.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, PickupCallCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, PickupCallCardComponent],
})
export class SharedModule { }
