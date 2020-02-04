import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OrdersPageRoutingModule} from './orders-routing.module';

import {OrdersPage} from './orders.page';
import {OrdersListForWaitingComponent} from './orders-list-for-waiting/orders-list-for-waiting.component';
import {OrdersListForBidingComponent} from './orders-list-for-biding/orders-list-for-biding.component';
import {OrdersListForProgressComponent} from './orders-list-for-progress/orders-list-for-progress.component';
import {OrdersListForCompletedComponent} from './orders-list-for-completed/orders-list-for-completed.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrdersPageRoutingModule
    ],
    declarations: [
        OrdersPage,
        OrdersListForWaitingComponent,
        OrdersListForBidingComponent,
        OrdersListForProgressComponent,
        OrdersListForCompletedComponent
    ]
})
export class OrdersPageModule {
}
