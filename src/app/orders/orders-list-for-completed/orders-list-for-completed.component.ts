import { Component, OnInit } from '@angular/core';
import {Order} from '../../classes/orders/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-orders-list-for-completed',
  templateUrl: './orders-list-for-completed.component.html',
  styleUrls: ['./orders-list-for-completed.component.scss'],
})
export class OrdersListForCompletedComponent implements OnInit {

  orders: Order[];
  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getCompletedOrder();
  }

  ngOnInit() {}

}
