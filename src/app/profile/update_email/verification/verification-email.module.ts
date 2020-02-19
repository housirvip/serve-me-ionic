import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {VerificationComponent} from './verification.component';
import {UpdatePage} from '../update.page';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [VerificationComponent],
    entryComponents: [VerificationComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    exports: [
        VerificationComponent
    ]
})
export class VerificationEmailModule {
}
