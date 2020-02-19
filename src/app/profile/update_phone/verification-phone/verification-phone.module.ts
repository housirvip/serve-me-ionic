import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {VerificationPhoneComponent} from './verification-phone.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [VerificationPhoneComponent],
    entryComponents: [VerificationPhoneComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    exports: [
        VerificationPhoneComponent
    ]
})
export class VerificationPhoneModule {
}
