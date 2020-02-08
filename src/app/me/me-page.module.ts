import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginPageModule} from '../login/login.module';
import {RegisterPageModule} from '../register/register.module';
import {MePage} from './me.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        LoginPageModule,
        RegisterPageModule,
        RouterModule.forChild([{path: '', component: MePage}])
    ],
    declarations: [MePage]
})
export class MePageModule {
}
