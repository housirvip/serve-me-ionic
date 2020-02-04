import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/orders/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

    orders: Order[];
    waitingPageVisable: boolean;
    bidingPageVisable: boolean;
    progressPageVisable: boolean;
    completedPageVisable: boolean;
    constructor(private orderService: OrderService) {
        this.waitingPageVisable = true;
        this.bidingPageVisable = false;
        this. progressPageVisable = false;
        this. completedPageVisable = false;
    }

  ngOnInit() {
  }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev.detail.value);
        if (ev.detail.value === 'wating') {
            this.waitingPageVisable = true;
            this.bidingPageVisable = false;
            this. progressPageVisable = false;
            this. completedPageVisable = false; }
        if (ev.detail.value === 'progress') {
            this.waitingPageVisable = false;
            this.bidingPageVisable = false;
            this. progressPageVisable = true;
            this. completedPageVisable = false;
        }
        if (ev.detail.value === 'biding') {
            this.waitingPageVisable = false;
            this.bidingPageVisable = true;
            this. progressPageVisable = false;
            this. completedPageVisable = false;
        }
        if (ev.detail.value === 'completed') {
            this.waitingPageVisable = false;
            this.bidingPageVisable = false;
            this. progressPageVisable = false;
            this. completedPageVisable = true;
        }

    }

}
