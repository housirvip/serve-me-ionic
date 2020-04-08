import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidingEditPageRoutingModule } from './biding-edit-routing.module';

import { BidingEditPage } from './biding-edit.page';
import {ShowAddressPageModule} from '../../../new-request/show-address/show-address.module';
import {UpdateaddressPageModule} from '../../../address/updateaddress/updateaddress.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BidingEditPageRoutingModule,
        ReactiveFormsModule,
        ShowAddressPageModule,
        UpdateaddressPageModule
    ],
  declarations: [BidingEditPage]
})
export class BidingEditPageModule {}
