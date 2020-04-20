import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {DatetimeService} from '../../services/datetime.service';
import {ToastService} from '../../services/toast.service';
import {Order} from '../../classes/order';

@Component({
  selector: 'app-progressing',
  templateUrl: './progressing.component.html',
  styleUrls: ['./progressing.component.scss'],
})
export class ProgressingComponent implements OnInit {

  constructor(private orderService: OrderService,
              private datetimeService: DatetimeService,
              private toastService: ToastService) {
  }

  get orders() {
    return this.orderService.orders;
  }

  ngOnInit() {
  }

  confirmFinished(order: Order) {
     this.orderService.complete(order, res => {
       this.toastService.presentToast('Complete the work', 2000);
     } );
  }
}
