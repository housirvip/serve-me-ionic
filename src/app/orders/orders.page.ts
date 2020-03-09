import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/order';
import {OrderStatus} from '../classes/order-status';
import {ToastService} from '../services/toast.service';
import {OrderRequest} from '../classes/spec/order-request';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
    currentTab: string;
    filterRequest: OrderRequest;

    get orders(): Order[] {
        return this.orderService.orders;
    }

    constructor(private orderService: OrderService,
                private toastService: ToastService,
                private userService: UserService) {
        this.filterRequest = new OrderRequest();
        this.filterRequest.user = this.userService.user.id;
    }

    ngOnInit() {
        this.currentTab = 'Biding';
        this.getOrders(OrderStatus.Biding);
    }

    getOrders(status: OrderStatus) {
        this.filterRequest.statusIn = [];
        this.filterRequest.statusIn.push(status);
        this.orderService.getOrders(this.filterRequest);
    }

    segmentChanged(ev: any) {
        this.currentTab = ev.detail.value;
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
