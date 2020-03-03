import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingPageRoutingModule } from './waiting-routing.module';

import { WaitingPage } from './waiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingPageRoutingModule
  ],
  declarations: [WaitingPage],
  entryComponents: [WaitingPage]
})
export class WaitingPageModule {}
