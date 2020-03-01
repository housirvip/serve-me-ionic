import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateaddressPageRoutingModule } from './updateaddress-routing.module';

import { UpdateaddressPage } from './updateaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateaddressPageRoutingModule
  ],
  declarations: [UpdateaddressPage]
})
export class UpdateaddressPageModule {}
