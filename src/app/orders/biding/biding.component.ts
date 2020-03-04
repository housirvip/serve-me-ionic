import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {OrderStatus} from '../../classes/order-status';
import {DatetimeService} from '../../services/datetime.service';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.component.html',
  styleUrls: ['./biding.component.scss'],
})
export class BidingComponent implements OnInit, AfterViewInit {

  get orders() {
    return this.orderService.orders;
  }
  constructor(private orderService: OrderService,
              private datetimeService: DatetimeService) { }

  ngOnInit() {
    console.log('biding component init');
   // this.orderService.getOrders(OrderStatus.Biding);
  }
  ngAfterViewInit() {
  }
}
