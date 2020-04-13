import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { OrdersPage } from "./orders.page";
import { RouterModule } from "@angular/router";
import { BidingComponent } from "./biding/biding.component";
import { PendingComponent } from "./pending/pending.component";
import { ProgressingComponent } from "./progressing/progressing.component";
import { CompletedComponent } from "./completed/completed.component";
import { BidingCheckPage } from "./biding/biding-check/biding-check.page";
import { BidingCheckPageModule } from "./biding/biding-check/biding-check.module";
import { ReviewPopoverComponent } from "./progressing/review-popover/review-popover.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidingCheckPageModule,
    RouterModule.forChild([{ path: "", component: OrdersPage }]),
  ],
  declarations: [
    OrdersPage,
    BidingComponent,
    PendingComponent,
    ProgressingComponent,
    CompletedComponent,
    ReviewPopoverComponent,
  ],
  entryComponents: [ReviewPopoverComponent],
})
export class OrdersPageModule {}
