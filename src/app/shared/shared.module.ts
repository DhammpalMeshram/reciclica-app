import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PickupCallCardComponent } from '../components/pickup-call-card/pickup-call-card.component';
import { HeaderComponent } from '../components/header/header.component';
import { ErrorMsgComponent } from '../components/error-msg/error-msg.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    PickupCallCardComponent,
    ErrorMsgComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent, 
    PickupCallCardComponent,
    ErrorMsgComponent
  ],
})
export class SharedModule { }
