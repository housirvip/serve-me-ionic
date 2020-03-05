import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorOrderPageRoutingModule } from './vendor-order-routing.module';

import { VendorOrderPage } from './vendor-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorOrderPageRoutingModule
  ],
  declarations: [VendorOrderPage]
})
export class VendorOrderPageModule {}
