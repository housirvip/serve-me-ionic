import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateaddressPageRoutingModule } from './updateaddress-routing.module';

import { UpdateaddressPage } from './updateaddress.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateaddressPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateaddressPage],
  entryComponents: [UpdateaddressPage],
})
export class UpdateaddressPageModule {}
