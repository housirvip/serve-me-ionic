import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorDashboardPageRoutingModule } from './vendor-dashboard-routing.module';

import { VendorDashboardPage } from './vendor-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorDashboardPageRoutingModule
  ],
  declarations: [VendorDashboardPage]
})
export class VendorDashboardPageModule {}
