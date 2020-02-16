import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardPage} from './dashboard.page';
import {TypePage} from './type/type.page';
import {TypePageModule} from './type/type.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TypePageModule,
        RouterModule.forChild([{path: '', component: DashboardPage}])
    ],
    declarations: [DashboardPage]
})
export class DashboardPageModule {
}
