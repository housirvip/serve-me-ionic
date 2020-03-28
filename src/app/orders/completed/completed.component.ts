import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {DatetimeService} from '../../services/datetime.service';
import {ToastService} from '../../services/toast.service';
import {Order} from '../../classes/order';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {


  constructor(private orderService: OrderService,
              private datetimeService: DatetimeService,
              private toastService: ToastService) {
  }

  get orders() {
    return this.orderService.orders;
  }

  ngOnInit() {
  }

  review(order: Order) {

  }
}
