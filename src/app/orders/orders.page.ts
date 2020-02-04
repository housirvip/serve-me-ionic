import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/orders/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private orderService: OrderService) { }
  orders: Order[];

  ngOnInit() {
   this.orderService.RequestOrder();
   this.orders = this.orderService.order;
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
