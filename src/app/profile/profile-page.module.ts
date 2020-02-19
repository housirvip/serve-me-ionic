import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfilePage} from './profile.page';
import {UpdatePhonePageModule} from './update_phone/update-phone.module';
import {VerificationModule} from './update_phone/verification/verification.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UpdatePhonePageModule,
        VerificationModule,
        RouterModule.forChild([
            {path: '', component: ProfilePage},
            {path: 'edit/:field', loadChildren: () => import('./edit/edit-page.module').then(m => m.EditPageModule)}
        ])
    ],
    declarations: [ProfilePage]
})
export class ProfilePageModule {
}
