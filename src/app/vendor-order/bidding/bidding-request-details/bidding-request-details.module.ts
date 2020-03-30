import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RequestDetailsPageRoutingModule } from "./bidding-request-details-routing.module";

import { BiddingRequestDetailsPage } from "./bidding-request-details.page";
import { ModifyPopoverComponent } from "./modify-popover/modify-popover.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestDetailsPageRoutingModule
  ],
  declarations: [BiddingRequestDetailsPage, ModifyPopoverComponent],
  entryComponents: [ModifyPopoverComponent]
})
export class RequestDetailsPageModule {}
