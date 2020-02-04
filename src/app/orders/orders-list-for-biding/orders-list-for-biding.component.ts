import { Component, OnInit } from '@angular/core';
import {Order} from '../../classes/orders/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-orders-list-for-biding',
  templateUrl: './orders-list-for-biding.component.html',
  styleUrls: ['./orders-list-for-biding.component.scss'],
})
export class OrdersListForBidingComponent implements OnInit {

  orders: Order[];
  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getBidingOrder();
  }

  ngOnInit() {}

}
