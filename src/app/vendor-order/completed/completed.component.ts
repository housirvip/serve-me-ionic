import {Component, OnInit} from '@angular/core';
import {BidRequest} from '../../classes/spec/bid-request';
import {OrderService} from '../../services/order.service';
import {UserService} from '../../services/user.service';
import {ToastService} from '../../services/toast.service';
import {Vendor} from '../../classes/vendor';
import {Bid} from '../../classes/bid';
import {forEach} from '@angular-devkit/schematics';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
    bidRequest: BidRequest;
    haveTargetOrder = false;

    constructor(private orderService: OrderService,
                private userService: UserService,
                private toastService: ToastService) {
        this.bidRequest = new BidRequest();
        // plz review BidRequest, there shows some specification
    }

    get vendor(): Vendor {
        return this.userService.vendor;
    }

    get bids(): Bid[] {
        return this.orderService.bids;
    }

    get orders() {
        return this.orderService.orders;
    }

    ngOnInit() {
        console.log('pending component init');
        this.bidRequest.vendor = this.vendor.id;
        this.getBids();

    }

    getBids() {
        this.orderService.getBids(this.bidRequest);
    }

}
