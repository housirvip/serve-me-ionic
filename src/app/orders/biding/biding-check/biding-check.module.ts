import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidingCheckPageRoutingModule } from './biding-check-routing.module';

import { BidingCheckPage } from './biding-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidingCheckPageRoutingModule
  ],
  declarations: [BidingCheckPage],
  entryComponents: [BidingCheckPage]
})
export class BidingCheckPageModule {}
