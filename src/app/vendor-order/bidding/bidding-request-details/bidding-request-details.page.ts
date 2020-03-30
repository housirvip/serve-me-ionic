import { Component, OnInit } from "@angular/core";
import { ToastService } from "../../../services/toast.service";
import { ModalController, NavParams, PopoverController } from "@ionic/angular";
import { OrderService } from "../../../services/order.service";
import { OrderStatus } from "../../../classes/order-status";
import { Order } from "../../../classes/order";
import { DatetimeService } from "../../../services/datetime.service";
import { Bid } from "src/app/classes/bid";
import { LoadingService } from "../../../services/loading.service";
import { ModifyPopoverComponent } from "./modify-popover/modify-popover.component";
import { RevokePopoverComponent } from "./revoke-popover/revoke-popover.component";

@Component({
  selector: "app-bidding-request-details",
  templateUrl: "./bidding-request-details.page.html",
  styleUrls: ["./bidding-request-details.page.scss"]
})
export class BiddingRequestDetailsPage implements OnInit {
  bid: Bid;
  order: Order;
  // tslint:disable-next-line:variable-name
  best_bid: string;
  your_bid: string;

  constructor(
    private orderService: OrderService,
    private modalController: ModalController,
    public popoverController: PopoverController,
    private toastService: ToastService,
    private navParams: NavParams,
    private datetimeService: DatetimeService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.bid = this.navParams.get("bid");
    this.your_bid = "$" + this.bid.price;
    this.loadingService.present().then(r => {});
    this.orderService.getOrderFromId(this.bid.order.id).subscribe(data => {
      console.log("DATA:", data);
      if (data) {
        this.order = data;
        this.best_bid = "No bids";

        console.log("Bidding Details Page - Bid: ", this.bid);
        console.log("Bidding Details Page - Order: ", this.order);

        if (this.order.bids.length) {
          const best = this.order.bids
            .map(x => x.price)
            .reduce((acc, cv) => {
              return acc < cv ? acc : cv;
            }, Number.POSITIVE_INFINITY);
          this.best_bid = "$" + best;
        }
        console.log("Bidding Details Page - Best Bid: ", this.best_bid);
        console.log("Bidding Details Page - Your Bid: ", this.bid.price);
      }
      this.loadingService.dismiss().then(r => {});
    });
  }

  onBackPressed(data) {
    this.modalController.dismiss(data).then(() => {});
  }

  async onModifyBidPressed(ev: any) {
    const popover = await this.popoverController.create({
      component: ModifyPopoverComponent,
      // event: ev, //use this if you want the popover to be generated at the position of the click
      backdropDismiss: true,
      componentProps: { order: this.order, bid: this.bid }
    });
    await popover.present();
    popover.onWillDismiss().then(result => {
      if (result.data) {
        console.log(result.data);
        this.onBackPressed(result.data);
      }
    });
    return;
  }

  async onRevokeBidPressed(ev: any) {
    const popover = await this.popoverController.create({
      component: RevokePopoverComponent,
      // event: ev, //use this if you want the popover to be generated at the position of the click
      backdropDismiss: true,
      componentProps: { order: this.order, bid: this.bid }
    });
    await popover.present();
    popover.onWillDismiss().then(result => {
      if (result.data) {
        console.log(result.data);
        this.onBackPressed(result.data);
      }
    });
    return;
  }
}
