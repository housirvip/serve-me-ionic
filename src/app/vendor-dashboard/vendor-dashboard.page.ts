import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {OrderStatus} from '../classes/order-status';
import {DatetimeService} from '../services/datetime.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.page.html',
  styleUrls: ['./vendor-dashboard.page.scss'],
})
export class VendorDashboardPage implements OnInit {

  constructor(private orderService: OrderService,
              private datetimeService: DatetimeService) { }


  get newRequest() {
     return this.orderService.orders;
  }
  ngOnInit() {
    this.orderService.getOrders(OrderStatus.Waiting);

  }

}
