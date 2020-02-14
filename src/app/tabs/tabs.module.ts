import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs-routing.module';

import {TabsPage} from './tabs.page';
import {LoginPageModule} from '../login/login.module';
import {RegisterPageModule} from '../register/register.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        LoginPageModule,
        RegisterPageModule,
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
