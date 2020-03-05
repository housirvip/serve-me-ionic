import { Component, OnInit } from "@angular/core";
import { ToastService } from "../../../services/toast.service";
import { PopoverController, NavParams } from "@ionic/angular";
import { Order } from "../../../classes/order";
import { Bid } from "src/app/classes/bid";
import { UserService } from "src/app/services/user.service";
import { OrderService } from "../../../services/order.service";

@Component({
  selector: "app-bid-popover",
  templateUrl: "./bid-popover.component.html",
  styleUrls: ["./bid-popover.component.scss"]
})
export class BidPopoverComponent implements OnInit {
  bid_amount: number;
  bid_message: string;
  order: Order;

  constructor(
    private orderService: OrderService,
    private toastService: ToastService,
    private userService: UserService,
    private popoverController: PopoverController,
    private navParams: NavParams
  ) {
    this.order = this.navParams.get("order");
  }

  ngOnInit() {
    console.log("Order details:");
    console.log("Title: ", this.order.title);
    console.log("Description: ", this.order.description);
  }

  onFormSubmit() {
    if (!this.bid_amount) {
      //bid amount wasn't set
      this.toastService.presentToast("Please input a bid ammount", 1000);
    } else {
      console.log("bid amount: ", this.bid_amount);
      console.log("bid message: ", this.bid_message);

      console.log(this.userService);
      var bid: Bid = {
        id: 0,
        //uid: this.userService.vendor.id, //uncomment when implemented
        uid: 342, //for testing purposes - Javier's id
        price: this.bid_amount,
        description: this.bid_message,
        order: this.order,
        createTime: new Date()
      };
      this.orderService.bid(bid);

      this.dissmissPopover();
    }
  }

  async dissmissPopover() {
    await this.popoverController.dismiss(this.bid_amount);
  }
}
