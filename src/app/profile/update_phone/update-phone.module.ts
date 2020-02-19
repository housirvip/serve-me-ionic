import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePhonePageRoutingModule } from './update-phone-routing.module';

import { UpdatePhonePage } from './update-phone.page';
import {TypePage} from '../../dashboard/type/type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePhonePageRoutingModule
  ],
  declarations: [UpdatePhonePage],
  entryComponents: [UpdatePhonePage],
})
export class UpdatePhonePageModule {}
