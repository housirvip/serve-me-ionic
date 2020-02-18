import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {VerificationComponent} from './verification.component';
import {UpdatePhonePage} from '../update-phone/update-phone.page';


@NgModule({
    declarations: [VerificationComponent],
    entryComponents: [VerificationComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        VerificationComponent
    ]
})
export class VerificationModule {
}
