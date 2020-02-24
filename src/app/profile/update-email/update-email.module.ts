import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEmailPage } from './update-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [UpdateEmailPage],
  entryComponents: [UpdateEmailPage]
})
export class UpdateEmailPageModule {}
