import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePhonePageRoutingModule } from './update-email-routing.module';

import { UpdateEmailPage } from './update-email.page';
import {TypePage} from '../../dashboard/type/type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePhonePageRoutingModule
  ],
  declarations: [UpdateEmailPage],
  entryComponents: [UpdateEmailPage],
})
export class UpdatePhonePageModule {}
