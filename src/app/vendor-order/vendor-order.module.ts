import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VendorOrderPage } from "./vendor-order.page";
import { RouterModule } from "@angular/router";
import { BidPipe } from "../pipes/bid.pipe";
import { BidingComponent } from "./biding/biding.component";
import { CompletedComponent } from "./completed/completed.component";
import { PendingComponent } from "./pending/pending.component";
import { ProgressingComponent } from "./progressing/progressing.component";
import { BiddingRequestDetailsPage } from "./biding/bidding-request-details/bidding-request-details.page";
import { ModifyPopoverComponent } from "./biding/bidding-request-details/modify-popover/modify-popover.component";
import { RevokePopoverComponent } from "./biding/bidding-request-details/revoke-popover/revoke-popover.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: VendorOrderPage }]),
  ],
  declarations: [
    VendorOrderPage,
    BidPipe,
    BidingComponent,
    CompletedComponent,
    PendingComponent,
    ProgressingComponent,
    BiddingRequestDetailsPage,
    ModifyPopoverComponent,
    RevokePopoverComponent,
  ],
  entryComponents: [
    BiddingRequestDetailsPage,
    ModifyPopoverComponent,
    RevokePopoverComponent,
  ],
})
export class VendorOrderPageModule {}
