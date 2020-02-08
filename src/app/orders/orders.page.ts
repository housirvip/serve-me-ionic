import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/orders/order';
import {orderStatus} from '../classes/orders/orderStatus';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

    orders: Order[];

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        this.getOrders(orderStatus.waiting);
    }

    getOrders(status: orderStatus) {
        this.orders = this.orderService.getOrders(status);
    }

    segmentChanged(ev: any) {
        this.getOrders(ev.detail.value as orderStatus);
    }
}
