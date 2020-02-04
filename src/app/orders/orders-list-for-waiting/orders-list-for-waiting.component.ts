import { Component, OnInit } from '@angular/core';
import {Order} from '../../classes/orders/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-orders-list-for-waiting',
  templateUrl: './orders-list-for-waiting.component.html',
  styleUrls: ['./orders-list-for-waiting.component.scss'],
})
export class OrdersListForWaitingComponent implements OnInit {

  orders: Order[];
  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getWaitingOrder();
  }

  ngOnInit() {}

}
