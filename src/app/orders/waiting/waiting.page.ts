import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {OrderStatus} from '../../classes/order-status';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.page.html',
  styleUrls: ['./waiting.page.scss'],
})
export class WaitingPage implements OnInit {

  get orders() {
    return this.orderService.orders;
  }
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders(OrderStatus.Waiting);
  }

}
