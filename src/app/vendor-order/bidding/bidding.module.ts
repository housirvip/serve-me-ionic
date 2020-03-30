import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BiddingPageRoutingModule } from "./bidding-routing.module";

import { BiddingPage } from "./bidding.page";
import { BiddingRequestDetailsPage } from "./bidding-request-details/bidding-request-details.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BiddingPageRoutingModule],
  declarations: [],
  entryComponents: [BiddingRequestDetailsPage]
})
export class BiddingPageModule {}
