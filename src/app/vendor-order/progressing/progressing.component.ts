import { Component, OnInit } from '@angular/core';
import {BidRequest} from '../../classes/spec/bid-request';
import {OrderService} from '../../services/order.service';
import {UserService} from '../../services/user.service';
import {Vendor} from '../../classes/vendor';
import {Bid} from '../../classes/bid';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-progressing',
  templateUrl: './progressing.component.html',
  styleUrls: ['./progressing.component.scss'],
})
export class ProgressingComponent implements OnInit {
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

  Done(bid: Bid) {
    console.log(bid.order);
    this.orderService.finish(bid.order).subscribe(
        res => {
          this.toastService.presentToast('You have already done, please wait your customer confirm', 2000);
          this.getBids();
        }
    );
  }
}
