import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfilePage} from './profile.page';
import {UpdatePhonePageModule} from './update_phone/update-phone.module';
import {UpdateEmailPageModule} from './update_email/update-email.module';
import {VerificationPhoneModule} from './update_phone/verification-phone/verification-phone.module';
import {VerificationEmailModule} from './update_email/verification-email/verification-email.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UpdatePhonePageModule,
        VerificationPhoneModule,
        VerificationEmailModule,
        UpdateEmailPageModule,
        RouterModule.forChild([
            {path: '', component: ProfilePage},
            {path: 'edit/:field', loadChildren: () => import('./edit/edit-page.module').then(m => m.EditPageModule)}
        ])
    ],
    declarations: [ProfilePage]
})
export class ProfilePageModule {
}
