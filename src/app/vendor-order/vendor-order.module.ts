import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {VendorOrderPage} from './vendor-order.page';
import {RouterModule} from '@angular/router';
import {BidPipe} from '../pipes/bid.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: VendorOrderPage}])
    ],
    declarations: [VendorOrderPage, BidPipe]
})
export class VendorOrderPageModule {
}
