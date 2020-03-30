import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {DatetimeService} from '../../services/datetime.service';
import {UserService} from '../../services/user.service';
import {BidRequest} from '../../classes/spec/bid-request';
import {Vendor} from '../../classes/vendor';
import {Bid} from '../../classes/bid';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
  bidRequest: BidRequest;
  haveTargetOrder = false;
  constructor(private orderService: OrderService,
              private userService: UserService) {
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
