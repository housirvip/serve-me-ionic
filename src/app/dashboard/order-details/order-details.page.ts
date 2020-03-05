import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Order } from "../../classes/order";
import { WorkType } from "../../classes/work-type";
import { OrderStatus } from "../../classes/order-status";
import { OrderService } from "../../services/order.service";
import { ToastService } from "../../services/toast.service";
import { PopoverController } from "@ionic/angular";
import { BidPopoverComponent } from "./bid-popover/bid-popover.component";
import * as moment from "moment";
import * as linq from "linq-typescript";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.page.html",
  styleUrls: ["./order-details.page.scss"]
})
export class OrderDetailsPage implements OnInit {
  @Input() order: Order;
  private order_price: number;
  private order_title: string;
  private order_type: WorkType;
  private order_status: OrderStatus;
  private order_requestor: string; //who posted the order
  private order_serverProvider: string; //who is providing the service
  private order_time: Date; //creation date
  private order_time_str: string;
  private order_imgUrl: string;
  private order_orderID: number;
  private order_description: string;
  private order_location: string;
  private order_description_txt = "DESCRIPTION";
  private order_date: Date; //fullfillment date
  private order_date_date_str: string;
  private order_date_time_str: string;
  private order_date_date_txt = "DATE";
  private order_date_time_txt = "TIME";
  private order_requestor_txt = "CUSTOMER";
  private order_location_txt = "LOCATION";

  constructor(
    private orderService: OrderService,
    private modalController: ModalController,
    public popoverController: PopoverController,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    // if (this.order.bids) {
    //   const bids = new linq.List(this.order.bids);
    //   this.order_price = bids.any() ? bids.min(x => x.price) : 0;
    // } else {
    //   this.order_price = 0;
    // }
    // // this.order_price = this.order.bids || this.order.bids.length == 0
    // //     ? 0
    // //     : this.order.bids.reduce((min, bid) => Math.min(min, bid.price), Number.MAX_VALUE);
    // this.order_title = this.order.title;
    // this.order_type = this.order.type;
    // this.order_status = this.order.status;
    // this.order_requestor = this.order.user.username;
    // this.order_serverProvider = this.order.serverProvider;
    // this.order_time = this.order.time;
    // this.order_time_str = moment(this.order_time).format("MM/DD - HH:mm");
    // this.order_imgUrl = this.order.imgUrl;
    // this.order_orderID = this.order.orderID;
    // this.order_description = this.order.description;
    // this.order_location = this.order.address.city;
    this.setOrderValues();
  }

  setOrderValues() {
    if (this.order.bids) {
      const bids = new linq.List(this.order.bids);
      this.order_price = bids.any() ? bids.min(x => x.price) : 0;
    } else {
      this.order_price = 0;
    }
    // this.order_price = this.order.bids || this.order.bids.length == 0
    //     ? 0
    //     : this.order.bids.reduce((min, bid) => Math.min(min, bid.price), Number.MAX_VALUE);
    this.order_title = this.order.title;
    this.order_type = this.order.type;
    this.order_status = this.order.status;
    this.order_requestor = this.order.user.username;
    this.order_serverProvider = this.order.serverProvider;
    this.order_time = this.order.createTime; //fixed, was order.time
    this.order_date = this.order.time; //fullfillment date
    this.order_time_str = moment(this.order_time).format("MM/DD - HH:mm");
    this.order_date_date_str = moment(this.order_date).format("MM/DD/YYYY");
    this.order_date_time_str = moment(this.order_date).format("HH:mm");
    this.order_imgUrl = this.order.imgUrl;
    this.order_orderID = this.order.orderID;
    this.order_description = this.order.description;
    this.order_location = this.order.address.city;
  }

  onBackPressed() {
    this.modalController.dismiss("test").then(() => {});
  }

  doRefresh(event) {
    setTimeout(() => {
      this.toastService.presentToast("updated", 2000).then(() => {
        this.setOrderValues();
      });
      event.target.complete();
    }, 1000);
  }

  async onPlaceBidPressed(ev: any) {
    const popover = await this.popoverController.create({
      component: BidPopoverComponent,
      // event: ev, //use this if you want the popover to be generated at the position of the click
      backdropDismiss: true,
      componentProps: { order: this.order }
    });
    await popover.present();
    popover.onWillDismiss().then(result => {
      if (result.data) {
        console.log(result.data);
        if (result.data < this.order_price || this.order_price == 0) {
          //if the submitted bid is les than the current lowest bid OR if the current lowest bid is 0 (no bids yet)
          this.order_price = result.data;
          //this.doRefresh(ev);
        }
      }
    });
    return;
  }
}
