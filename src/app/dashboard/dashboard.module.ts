import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardPage } from "./dashboard.page";
import { TypePageModule } from "./type/type.module";
import { PricePageModule } from "./price/price.module";
import { OrderDetailsPage } from "./order-details/order-details.page";
import { BidPopoverComponent } from "./order-details/bid-popover/bid-popover.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TypePageModule,
    PricePageModule,
    RouterModule.forChild([{ path: "", component: DashboardPage }])
  ],
  declarations: [DashboardPage, OrderDetailsPage, BidPopoverComponent],
  entryComponents: [OrderDetailsPage, BidPopoverComponent]
})
export class DashboardPageModule {}
