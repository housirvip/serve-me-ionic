import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorPagePageRoutingModule } from './vendor-page-routing.module';

import { VendorPagePage } from './vendor-page.page';
import {RequestDetailsPageModule} from './request-details/request-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorPagePageRoutingModule,
      RequestDetailsPageModule
  ],
  declarations: [VendorPagePage]
})
export class VendorPagePageModule {}
