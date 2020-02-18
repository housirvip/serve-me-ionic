import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfilePage} from './profile.page';
import {UpdatePhonePageModule} from './update-phone/update-phone.module';
import {VerificationModule} from './verification/verification.module';

// @ts-ignore
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UpdatePhonePageModule,
        VerificationModule,
        RouterModule.forChild([{path: '', component: ProfilePage}])
    ],
    declarations: [ProfilePage]

})
export class ProfilePageModule {
}
