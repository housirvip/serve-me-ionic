import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { OrderService } from "../services/order.service";
import { Order } from "../classes/order";
import { OrderStatus } from "../classes/order-status";
import { ToastService } from "../services/toast.service";
import { OrderDetailsPage } from "./order-details/order-details.page";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"]
})
export class OrdersPage implements OnInit {
  orders: Order[];
  serviceProviderView: boolean;

  constructor(
    private orderService: OrderService,
    private modalController: ModalController,
    private toastService: ToastService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.serviceProviderView = this.userService.isVendorViewEnabled;
    console.log(
      "serviceProviderView in Orders Page: ",
      this.serviceProviderView
    );
    this.getOrders(OrderStatus.waiting);
  }

  getOrders(status: OrderStatus) {
    this.orders = this.orderService.getOrders(status);
  }

  segmentChanged(ev: any) {
    this.getOrders(ev.detail.value as OrderStatus);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.toastService.presentToast("updated", 2000).then(() => {});
      event.target.complete();
    }, 1000);
  }

  async orderDetailsModal(order: Order) {
    const modal = await this.modalController.create({
      component: OrderDetailsPage,
      componentProps: {
        order: order
      }
    });
    return await modal.present();
  }
}
