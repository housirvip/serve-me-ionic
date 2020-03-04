import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {DatetimeService} from '../../services/datetime.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {

  constructor(private orderService: OrderService,
              private datetimeService: DatetimeService) { }
  get orders() {
    return this.orderService.orders;
  }
  ngOnInit() {}

}
