import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {VerificationEmailComponent} from './verification-email.component';
import {UpdateEmailPage} from '../update-email.page';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [VerificationEmailComponent],
    entryComponents: [VerificationEmailComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    exports: [
        VerificationEmailComponent
    ]
})
export class VerificationEmailModule {
}
