import { Component, OnInit } from '@angular/core';
import {Order} from '../../classes/orders/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-orders-list-for-progress',
  templateUrl: './orders-list-for-progress.component.html',
  styleUrls: ['./orders-list-for-progress.component.scss'],
})
export class OrdersListForProgressComponent implements OnInit {

  orders: Order[];
  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getProgressOrder();
  }

  ngOnInit() {}

}
