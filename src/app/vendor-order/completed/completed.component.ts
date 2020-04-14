import { Component, OnInit } from "@angular/core";
import { BidRequest } from "../../classes/spec/bid-request";
import { OrderService } from "../../services/order.service";
import { UserService } from "../../services/user.service";
import { ToastService } from "../../services/toast.service";
import { Vendor } from "../../classes/vendor";
import { Bid } from "../../classes/bid";
import { Order } from "../../classes/order";
import { forEach } from "@angular-devkit/schematics";
import { OrderStatus } from "../../classes/order-status";
import { OrderRequest } from "../../classes/spec/order-request";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-completed",
  templateUrl: "./completed.component.html",
  styleUrls: ["./completed.component.scss"],
})
export class CompletedComponent implements OnInit {
  bidRequest: BidRequest;
  haveTargetOrder = false;

  filterRequest: OrderRequest;

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private toastService: ToastService,
    private alertController: AlertController
  ) {
    this.bidRequest = new BidRequest();
    // plz review BidRequest, there shows some specification
    this.filterRequest = new OrderRequest();
    this.filterRequest.vendor = this.userService.vendor.id;
  }

  get vendor(): Vendor {
    return this.userService.vendor;
  }

  get bids(): Bid[] {
    return this.orderService.bids;
  }

  get orders() {
    return this.orderService.orders;
  }

  ngOnInit() {
    console.log("pending component init");
    this.bidRequest.vendor = this.vendor.id;
    this.getBids();
    this.getOrders(OrderStatus.Completed);
    console.log(this.bids);
    console.log(this.orders);
  }

  getBids() {
    this.orderService.getBids(this.bidRequest);
  }

  getOrders(status: OrderStatus) {
    this.filterRequest.statusIn = [];
    this.filterRequest.statusIn.push(status);
    this.orderService.getOrders(this.filterRequest);
  }

  openReviewDetails(order: Order) {
    console.log(order);
    if (order.review.rate) {
      //if a review is set for this order
      this.presentAlert(order);
    }
  }

  async presentAlert(order: Order) {
    const alert = await this.alertController.create({
      header: "Review",
      message:
        "<b>Title:</b> " +
        order.review.title +
        "<br> <br>" +
        "<b>Description:</b> " +
        order.review.description,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log("Ok button clicked");
          },
        },
      ],
    });

    await alert.present();
  }
}
