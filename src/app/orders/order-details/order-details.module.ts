import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { OrderDetailsPageRoutingModule } from "./order-details-routing.module";
import { OrderDetailsPage } from "./order-details.page";
import { BidPopoverComponent } from "./bid-popover/bid-popover.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailsPageRoutingModule
  ],
  declarations: [OrderDetailsPage, BidPopoverComponent],
  exports: [OrderDetailsPage],
  entryComponents: [BidPopoverComponent]
})
export class OrderDetailsPageModule {}
