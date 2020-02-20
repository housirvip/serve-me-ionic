import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfilePage} from './profile.page';
import {UpdatePhonePageModule} from './update-phone/update-phone.module';
import {VerificationModule} from './update-phone/verification/verification.module';
import {UpdatePasswordPageModule} from './update-password/update-password.module';
import {UpdateEmailPageModule} from './update-email/update-email.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UpdatePhonePageModule,
        UpdateEmailPageModule,
        VerificationModule,
        UpdatePasswordPageModule,
        RouterModule.forChild([{path: '', component: ProfilePage}])
    ],
    declarations: [ProfilePage]

})
export class ProfilePageModule {
}
