import {Component, OnInit} from '@angular/core';
import {OrderRequest} from '../classes/spec/order-request';
import {Order} from '../classes/order';
import {OrderService} from '../services/order.service';
import {ToastService} from '../services/toast.service';
import {UserService} from '../services/user.service';
import {OrderStatus} from '../classes/order-status';
import {Vendor} from '../classes/vendor';

@Component({
    selector: 'app-vendor-order',
    templateUrl: './vendor-order.page.html',
    styleUrls: ['./vendor-order.page.scss'],
})
export class VendorOrderPage implements OnInit {

    currentTab: string;
    filterRequest: OrderRequest;

    get orders(): Order[] {
        return this.orderService.orders;
    }

    get vendor(): Vendor {
        return this.userService.vendor;
    }

    constructor(private orderService: OrderService,
                private toastService: ToastService,
                private userService: UserService) {
        this.filterRequest = new OrderRequest();
        this.filterRequest.vid = this.userService.vendor.id;
    }

    ngOnInit() {
        this.currentTab = 'Biding';
        this.getOrders(OrderStatus.Biding);
    }

    getOrders(status: OrderStatus) {
        this.filterRequest.status = [];
        this.filterRequest.status.push(status);
        this.orderService.getOrders(this.filterRequest);
    }

    segmentChanged(ev: any) {
        this.getOrders(ev.detail.value as OrderStatus);
    }

    doRefresh(event) {
        this.getOrders(this.currentTab as OrderStatus);
        setTimeout(() => {
            this.toastService.presentToast('updated', 2000).then(() => {
            });
            event.target.complete();
        }, 1000);
    }
}
