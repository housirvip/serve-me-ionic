import { AfterViewInit, Component, OnInit } from "@angular/core";
import { OrderService } from "../../services/order.service";
import { OrderStatus } from "../../classes/order-status";
import { OrderRequest } from "../../classes/spec/order-request";
import { Order } from "../../classes/order";
import { Vendor } from "../../classes/vendor";
import { UserService } from "../../services/user.service";
import { BidRequest } from "../../classes/spec/bid-request";
import { Bid } from "../../classes/bid";
import { ToastService } from "../../services/toast.service";
import { ModalController } from "@ionic/angular";
import { BiddingRequestDetailsPage } from "./bidding-request-details/bidding-request-details.page";

@Component({
  selector: "app-bidding",
  templateUrl: "./bidding.page.html",
  styleUrls: ["./bidding.page.scss"]
})
export class BiddingPage implements OnInit {
  bidRequest: BidRequest;
  haveTargetOrder = false;
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
    console.log("bidding component init");
    this.bidRequest.vendor = this.vendor.id;
    this.getBids();
  }

  goPending(bid: Bid) {
    this.orderService.confirm(bid.order).subscribe(res => {
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
        bid
      }
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
      if (data.data) {
        this.getBids();
      }
    });
    return await modal.present();
  }
}
