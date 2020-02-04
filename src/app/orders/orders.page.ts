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

    constructor(private orderService: OrderService) {
    }

  ngOnInit() {
   this.orderService.RequestOrder();
   this.orders = this.orderService.order;
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
