import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestGigPageRoutingModule } from './request-gig-routing.module';

import { RequestGigPage } from './request-gig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestGigPageRoutingModule
  ],
  declarations: [RequestGigPage]
})
export class RequestGigPageModule {}
