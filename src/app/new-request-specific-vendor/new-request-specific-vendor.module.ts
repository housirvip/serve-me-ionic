import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewRequestSpecificVendorPage } from './new-request-specific-vendor.page';
import {ShowAddressPageModule} from '../new-request/show-address/show-address.module';
import {UpdateaddressPageModule} from '../address/updateaddress/updateaddress.module';
import {NewRequestSpecificVendorPageRoutingModule} from './new-request-specific-vendor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRequestSpecificVendorPageRoutingModule,
    ReactiveFormsModule,
    ShowAddressPageModule,
    UpdateaddressPageModule
  ],
  declarations: [NewRequestSpecificVendorPage]
})
export class NewRequestSpecificVendorPageModule {}
