import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyPage} from './my.page';
import {LoginPageModule} from '../login/login.module';
import {RegisterPageModule} from '../register/register.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        LoginPageModule,
        RegisterPageModule,
        RouterModule.forChild([{path: '', component: MyPage}])
    ],
    declarations: [MyPage]
})
export class MyPageModule {
}
