import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {FirebaseUIModule} from 'firebaseui-angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        FirebaseUIModule,
    ],
    entryComponents: [LoginPage],
    declarations: [LoginPage]
})
export class LoginPageModule {
}
