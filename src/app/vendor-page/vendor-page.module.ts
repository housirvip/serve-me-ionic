import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorPagePageRoutingModule } from './vendor-page-routing.module';

import { VendorPagePage } from './vendor-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorPagePageRoutingModule
  ],
  declarations: [VendorPagePage]
})
export class VendorPagePageModule {}
