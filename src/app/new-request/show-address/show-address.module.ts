import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowAddressPageRoutingModule } from './show-address-routing.module';

import { ShowAddressPage } from './show-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowAddressPageRoutingModule
  ],
  declarations: [ShowAddressPage],
  entryComponents: [ShowAddressPage]
})
export class ShowAddressPageModule {}
