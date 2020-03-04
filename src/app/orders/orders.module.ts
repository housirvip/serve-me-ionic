import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {OrdersPage} from './orders.page';
import {RouterModule} from '@angular/router';
import {BidingComponent} from './biding/biding.component';
import {PendingComponent} from './pending/pending.component';
import {ProgressingComponent} from './progressing/progressing.component';
import {CompletedComponent} from './completed/completed.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: OrdersPage}])
    ],
    declarations: [OrdersPage, BidingComponent, PendingComponent, ProgressingComponent , CompletedComponent]
})
export class OrdersPageModule {
}

