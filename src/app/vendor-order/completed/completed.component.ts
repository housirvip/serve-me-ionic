import {Component, OnInit} from "@angular/core";
import {OrderService} from "../../services/order.service";
import {UserService} from "../../services/user.service";
import {ToastService} from "../../services/toast.service";
import {Vendor} from "../../classes/vendor";
import {Bid} from "../../classes/bid";
import {Order} from "../../classes/order";
import {OrderStatus} from "../../classes/order-status";
import {OrderRequest} from "../../classes/spec/order-request";
import {AlertController} from "@ionic/angular";

@Component({
    selector: "app-completed",
    templateUrl: "./completed.component.html",
    styleUrls: ["./completed.component.scss"],
})
export class CompletedComponent implements OnInit {

    orderRequest: OrderRequest;

    constructor(
        private orderService: OrderService,
        private userService: UserService,
        private toastService: ToastService,
        private alertController: AlertController
    ) {
        // plz review OrderRequest, there shows some specification
        this.orderRequest = new OrderRequest();
    }

    get vendor(): Vendor {
        return this.userService.vendor;
    }

    get orders() {
        return this.orderService.orders;
    }

    ngOnInit() {
        this.orderRequest.vendor = this.userService.vendor.id;
        this.orderRequest.statusIn = [OrderStatus.Completed, OrderStatus.Refunded];
        this.getOrders();
    }

    getOrders() {
        this.orderService.getOrders(this.orderRequest);
        console.log(this.orders);
    }

    openReviewDetails(order: Order) {
        console.log(order);
        if (order.review.rate) {
            //if a review is set for this order
            let msg: string;
            if (order.review.title && order.review.description) {
                //title and description were set for review
                msg =
                    "<b>Title:</b> " +
                    order.review.title +
                    "<br> <br>" +
                    "<b>Description:</b> " +
                    order.review.description;
                this.presentAlert(order, msg).then(r => {
                });
            } else if (order.review.title) {
                //only title was set for review
                msg = "<b>Title:</b> " + order.review.title;
                this.presentAlert(order, msg).then(r => {
                });
            } else if (order.review.description) {
                msg = "<b>Description:</b> " + order.review.description;
                this.presentAlert(order, msg).then(r => {
                });
            }
        }
    }

    async presentAlert(order: Order, msg: string) {
        const alert = await this.alertController.create({
            header: "Review",
            message: msg,
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
