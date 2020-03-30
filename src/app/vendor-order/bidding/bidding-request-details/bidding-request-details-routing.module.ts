import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BiddingRequestDetailsPage } from "./bidding-request-details.page";

const routes: Routes = [
  {
    path: "",
    component: BiddingRequestDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestDetailsPageRoutingModule {}
