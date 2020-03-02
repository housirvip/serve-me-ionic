import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRequestPageRoutingModule } from './new-request-routing.module';

import { NewRequestPage } from './new-request.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewRequestPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [NewRequestPage]
})
export class NewRequestPageModule {}
