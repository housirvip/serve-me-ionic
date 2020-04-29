import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {UserService} from '../../services/user.service';
import {Vendor} from '../../classes/vendor';
import {OrderRequest} from "../../classes/spec/order-request";
import {OrderStatus} from "../../classes/order-status";

@Component({
    selector: 'app-pending',
    templateUrl: './pending.component.html',
    styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
    orderRequest: OrderRequest;

    constructor(private orderService: OrderService,
                private userService: UserService) {
        this.orderRequest = new OrderRequest();
        // plz review OrderRequest, there shows some specification
    }

    get vendor(): Vendor {
        return this.userService.vendor;
    }

    get orders() {
        return this.orderService.orders;
    }

    ngOnInit() {
        this.orderRequest.vendor = this.vendor.id;
        this.orderRequest.statusIn = [OrderStatus.Pending, OrderStatus.Accepting, OrderStatus.Closed];
        this.getOrders();
    }

    getOrders() {
        this.orderService.getOrders(this.orderRequest);
    }
}
