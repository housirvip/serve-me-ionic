import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/order';
import {OrderStatus} from '../classes/order-status';
import {ToastService} from '../services/toast.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit, AfterViewInit {
    currentTab: string;
    compoentHtml: string;
    get orders(): Order[] {
        return this.orderService.orders;
    }

    constructor(private orderService: OrderService,
                private toastService: ToastService) {

    }
    ngAfterViewInit() {
        this.compoentHtml = '<app-biding></app-biding>';
        this.currentTab = 'Biding';
    }

    ngOnInit() {
         this.getOrders(OrderStatus.Biding);
    }

    getOrders(status: OrderStatus) {
        this.orderService.getOrders(status);
    }

    segmentChanged(ev: any) {
        this.currentTab = ev.detail.value;
        console.log(ev.detail.value as OrderStatus);
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
