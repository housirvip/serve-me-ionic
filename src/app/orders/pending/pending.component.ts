import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {DatetimeService} from '../../services/datetime.service';
import {Order} from '../../classes/order';
import {ToastService} from '../../services/toast.service';
import {OrderStatus} from '../../classes/order-status';
import {OrderRequest} from '../../classes/spec/order-request';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-pending',
    templateUrl: './pending.component.html',
    styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
    filterRequest: OrderRequest;
    constructor(private orderService: OrderService,
                private datetimeService: DatetimeService,
                private toastService: ToastService,
                private userService: UserService) {
    }

    get orders() {
        return this.orderService.orders;
    }

    ngOnInit() {
    }

    pay(order: Order) {
      this.orderService.pay(order).subscribe(
          res => {
            this.toastService.presentToast('pay successfully', 2000);
            this.getOrders(OrderStatus.Pending);
          }
      );
    }

    getOrders(status: OrderStatus) {
        this.filterRequest = new OrderRequest();
        this.filterRequest.user = this.userService.user.id;
        this.filterRequest.statusIn = [];
        this.filterRequest.statusIn.push(status);
        if (status === OrderStatus.Biding) {
            //       this.filterRequest.status = OrderStatus.Accepting;
            this.filterRequest.statusIn.push(OrderStatus.Accepting);
        }
        if (status === OrderStatus.Progressing) {
            //       this.filterRequest.status = OrderStatus.Accepting;
            this.filterRequest.statusIn.push(OrderStatus.Finished);
        }
        this.orderService.getOrders(this.filterRequest);
    }

}
