import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {UserService} from '../../services/user.service';
import {Vendor} from '../../classes/vendor';
import {ToastService} from '../../services/toast.service';
import {OrderRequest} from "../../classes/spec/order-request";
import {OrderStatus} from "../../classes/order-status";
import {Order} from "../../classes/order";

@Component({
    selector: 'app-progressing',
    templateUrl: './progressing.component.html',
    styleUrls: ['./progressing.component.scss'],
})
export class ProgressingComponent implements OnInit {
    orderRequest: OrderRequest;

    constructor(private orderService: OrderService,
                private userService: UserService,
                private toastService: ToastService) {
        this.orderRequest = new OrderRequest();
        // plz review OrderRequest, there shows some specification
    }

    get vendor(): Vendor {
        return this.userService.vendor;
    }

    get orders() {
        return this.orderService.orders;
    }

    ngOnInit() {
        this.orderRequest.vendor = this.vendor.id;
        this.orderRequest.statusIn = [OrderStatus.Progressing, OrderStatus.Finished, OrderStatus.Refunding];
        this.getOrders();
    }

    getOrders() {
        this.orderService.getOrders(this.orderRequest);
    }

    Done(order: Order) {
        console.log(order);
        this.orderService.finish(order).subscribe(
            res => {
                this.toastService.presentToast('You have already done, please wait your customer confirm', 2000).then(r => {
                });
                this.getOrders();
            }
        );
    }
}
