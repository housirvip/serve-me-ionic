import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateNamePageRoutingModule } from './update-name-routing.module';

import { UpdateNamePage } from './update-name.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateNamePageRoutingModule
  ],
  declarations: [UpdateNamePage],
  entryComponents: [UpdateNamePage]
})
export class UpdateNamePageModule {}
