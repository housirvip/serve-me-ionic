import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {OrderStatus} from '../../classes/order-status';
import {OrderRequest} from '../../classes/spec/order-request';
import {Order} from '../../classes/order';
import {Vendor} from '../../classes/vendor';
import {UserService} from '../../services/user.service';
import {BidRequest} from '../../classes/spec/bid-request';
import {Bid} from '../../classes/bid';

@Component({
    selector: 'app-biding',
    templateUrl: './biding.component.html',
    styleUrls: ['./biding.component.scss'],
})
export class BidingComponent implements OnInit {
    bidRequest: BidRequest;

    get vendor(): Vendor {
        return this.userService.vendor;
    }

    get bids(): Bid[] {
        return this.orderService.bids;
    }

    constructor(private orderService: OrderService,
                private userService: UserService) {
        this.bidRequest = new BidRequest();
        // plz review BidRequest, there shows some specification
    }

    ngOnInit() {
        console.log('biding component init');
        this.bidRequest.vendor = this.vendor.id;
        this.getBids();
    }

    getBids() {
        this.orderService.getBids(this.bidRequest);
    }
}
