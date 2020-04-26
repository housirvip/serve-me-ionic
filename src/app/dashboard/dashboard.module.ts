import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardPage} from './dashboard.page';
import {TypePageModule} from './type/type.module';
import {PricePageModule} from './price/price.module';
import {SortPageModule} from './sort/sort.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TypePageModule,
        PricePageModule,
        SortPageModule,
        RouterModule.forChild([{path: '', component: DashboardPage}])
    ],
    declarations: [DashboardPage]
})
export class DashboardPageModule {
}
