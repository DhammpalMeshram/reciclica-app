import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from '../components/pickup-call-card/pickup-call-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PickupCallCardComponent],
})
export class SharedModule { }
