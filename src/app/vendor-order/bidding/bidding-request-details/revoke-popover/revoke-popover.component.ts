import { Component, OnInit } from "@angular/core";
import { NavParams, PopoverController } from "@ionic/angular";
import { ToastService } from "../../../../services/toast.service";
import { OrderService } from "../../../../services/order.service";
import { Order } from "../../../../classes/order";
import { Bid } from "../../../../classes/bid";
import { UserService } from "../../../../services/user.service";

@Component({
  selector: "app-revoke-popover",
  templateUrl: "./revoke-popover.component.html",
  styleUrls: ["./revoke-popover.component.scss"]
})
export class RevokePopoverComponent implements OnInit {
  order: Order;
  bid: Bid;
  revoked: boolean;

  constructor(
    private orderService: OrderService,
    private toastService: ToastService,
    private userService: UserService,
    private popoverController: PopoverController,
    private navParams: NavParams
  ) {
    this.order = this.navParams.get("order");
    this.bid = this.navParams.get("bid");
  }

  ngOnInit() {
    this.revoked = false;
    console.log("Order in popover: ", this.order);
    console.log("Bid in popover", this.bid);
  }

  onRevokePressed() {
    this.revoked = true;
    //call api function that removes bid
    this.orderService.deleteBid(this.bid.id);
    this.dissmissPopover().then(r => {});
    this.toastService.presentToast("Bid was revoked!", 1000).then(r => {});
  }

  onCancelPressed() {
    this.revoked = false;
    this.dissmissPopover().then(r => {});
  }

  async dissmissPopover() {
    await this.popoverController.dismiss(this.revoked);
  }
}
