import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Order } from "../../classes/order";
import { WorkType } from "../../classes/work-type";
import { OrderStatus } from "../../classes/order-status";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.page.html",
  styleUrls: ["./order-details.page.scss"]
})
export class OrderDetailsPage implements OnInit {
  @Input() order: Order;
  private order_price: string;
  private order_title: string;
  private order_type: WorkType;
  private order_status: OrderStatus;
  private order_requestor: string; //who posted the order
  private order_serverProvider: string; //who is providing the service
  private order_time: string;
  private order_imgUrl: string;
  private order_orderID: number;
  private order_description: string;
  private order_location: string;
  private order_description_txt = "DESCRIPTION";
  private order_requestor_txt = "CUSTOMER";
  private order_location_txt = "LOCATION";

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.order_price = this.order.price;
    this.order_title = this.order.title;
    this.order_type = this.order.type;
    this.order_status = this.order.status;
    this.order_requestor = this.order.requestor;
    this.order_serverProvider = this.order.serverProvider;
    this.order_time = this.order.time;
    this.order_imgUrl = this.order.imgUrl;
    this.order_orderID = this.order.orderID;
    this.order_description = this.order.description;
    this.order_location = this.order.location;
  }

  onBackPressed() {
    this.modalController.dismiss("test").then(() => {});
  }

  onPlaceBidPressed() {
    
  }
}
