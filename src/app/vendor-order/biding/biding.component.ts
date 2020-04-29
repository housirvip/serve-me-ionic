import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../services/order.service";
import { Vendor } from "../../classes/vendor";
import { UserService } from "../../services/user.service";
import { BidRequest } from "../../classes/spec/bid-request";
import { Bid } from "../../classes/bid";
import { ToastService } from "../../services/toast.service";
import { ModalController } from "@ionic/angular";
import { BiddingRequestDetailsPage } from "./bidding-request-details/bidding-request-details.page";

@Component({
  selector: "app-biding",
  templateUrl: "./biding.component.html",
  styleUrls: ["./biding.component.scss"],
})
export class BidingComponent implements OnInit {
  bidRequest: BidRequest;

  get vendor(): Vendor {
    return this.userService.vendor;
  }

  get bids(): Bid[] {
    return this.orderService.bids;
  }

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private toastService: ToastService,
    private modalController: ModalController
  ) {
    this.bidRequest = new BidRequest();
    // plz review BidRequest, there shows some specification
  }

  ngOnInit() {
    console.log("biding component init");
    this.bidRequest.vendor = this.vendor.id;
    this.getBids();
  }

  goPending(bid: Bid) {
    this.orderService.confirm(bid.order).subscribe((res) => {
      console.log(res);
      this.toastService.presentToast("confirm successfully", 2000);
      this.getBids();
    });
  }

  getBids() {
    this.orderService.getBids(this.bidRequest);
  }

  async requestDetailsModal(event, bid) {
    console.log("bid:", bid);
    const modal = await this.modalController.create({
      component: BiddingRequestDetailsPage,
      componentProps: {
        bid,
      },
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      if (data.data) {
        this.getBids();
        this.doRefresh(event);
      }
    });
    return await modal.present();
  }

  doRefresh(event) {
    this.getBids();
    setTimeout(() => {
      this.toastService.presentToast("updated", 2000).then(() => {});
      event.target.complete();
    }, 1000);
  }
}
