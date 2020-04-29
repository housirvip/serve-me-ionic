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
import { BidingRequestDetailsComponent } from "./biding/biding-request-details/biding-request-details.component";
import { ModifyPopoverComponent } from "./biding/biding-request-details/modify-popover/modify-popover.component";
import { RevokePopoverComponent } from "./biding/biding-request-details/revoke-popover/revoke-popover.component";

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
    BidingRequestDetailsComponent,
    ModifyPopoverComponent,
    RevokePopoverComponent,
  ],
  entryComponents: [
    BidingRequestDetailsComponent,
    ModifyPopoverComponent,
    RevokePopoverComponent,
  ],
})
export class VendorOrderPageModule {}
