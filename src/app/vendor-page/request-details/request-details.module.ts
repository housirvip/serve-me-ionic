import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestDetailsPageRoutingModule } from './request-details-routing.module';

import { RequestDetailsPage } from './request-details.page';
import {BidPopoverComponent} from './bid-popover/bid-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestDetailsPageRoutingModule
  ],
  declarations: [RequestDetailsPage],
  entryComponents: [RequestDetailsPage]
})
export class RequestDetailsPageModule {}
