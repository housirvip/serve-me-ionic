import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePhonePageRoutingModule } from './update-routing.module';

import { UpdatePage } from './update.page';
import {TypePage} from '../../dashboard/type/type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePhonePageRoutingModule
  ],
  declarations: [UpdatePage],
  entryComponents: [UpdatePage],
})
export class UpdatePhonePageModule {}
