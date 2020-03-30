import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BiddingPageRoutingModule } from "./bidding-routing.module";

import { BiddingPage } from "./bidding.page";
import { BiddingRequestDetailsPage } from "./bidding-request-details/bidding-request-details.page";
import { ModifyPopoverComponent } from "./bidding-request-details/modify-popover/modify-popover.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BiddingPageRoutingModule],
  declarations: [ModifyPopoverComponent],
  entryComponents: [BiddingRequestDetailsPage, ModifyPopoverComponent]
})
export class BiddingPageModule {}
