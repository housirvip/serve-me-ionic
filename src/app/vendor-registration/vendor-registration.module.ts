import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {VendorRegistrationPage} from './vendor-registration.page';
import {RouterModule} from '@angular/router';
import {UpdateaddressPageModule} from '../address/updateaddress/updateaddress.module';
import {TypePageModule} from '../dashboard/type/type.module';
import {ShowAddressPageModule} from '../new-request/show-address/show-address.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpdateaddressPageModule,
        TypePageModule,
        ShowAddressPageModule,
        RouterModule.forChild([{path: '', component: VendorRegistrationPage}])
    ],
    declarations: [VendorRegistrationPage]
})
export class VendorRegistrationModule {
}
