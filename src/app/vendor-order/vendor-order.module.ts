import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VendorOrderPage } from "./vendor-order.page";
import { RouterModule } from "@angular/router";
import { BidPipe } from "../pipes/bid.pipe";
import { BiddingPage } from "./bidding/bidding.page";
import { CompletedComponent } from "./completed/completed.component";
import { PendingComponent } from "./pending/pending.component";
import { ProgressingComponent } from "./progressing/progressing.component";
import { BiddingRequestDetailsPage } from "./bidding/bidding-request-details/bidding-request-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: VendorOrderPage }])
  ],
  declarations: [
    VendorOrderPage,
    BidPipe,
    BiddingPage,
    CompletedComponent,
    PendingComponent,
    ProgressingComponent,
    BiddingRequestDetailsPage
  ],
  entryComponents: [BiddingRequestDetailsPage]
})
export class VendorOrderPageModule {}
