import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MemberFormComponent } from './member-form/member-form.component';


@NgModule({
  declarations: [
    MemberFormComponent
  ],
  imports: [
    SharedModule,
    DonationRoutingModule,
  ]
})
export class DonationModule { }
