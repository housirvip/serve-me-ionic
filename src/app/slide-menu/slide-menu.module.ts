import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SlideMenuComponent} from './slide-menu.component';
import {LoginPageModule} from '../login/login.module';
import {RegisterPageModule} from '../register/register.module';

@NgModule({
    declarations: [SlideMenuComponent],
    imports: [
        CommonModule,
        IonicModule,
        LoginPageModule,
        RegisterPageModule,
    ],
    exports: [
        SlideMenuComponent
    ]
})
export class SlideMenuModule {
}
