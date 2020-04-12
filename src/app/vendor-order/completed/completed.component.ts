import {Component, OnInit} from '@angular/core';
import {BidRequest} from '../../classes/spec/bid-request';
import {ReviewRequest} from '../../classes/spec/review-request';
import {OrderService} from '../../services/order.service';
import {UserService} from '../../services/user.service';
import {ReviewService} from '../../services/review.service';
import {ToastService} from '../../services/toast.service';
import {Vendor} from '../../classes/vendor';
import {User} from '../../classes/user';
import {Bid} from '../../classes/bid';
import {Review} from '../../classes/review';
import {forEach} from '@angular-devkit/schematics';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
    bidRequest: BidRequest;
    reviewRequest: ReviewRequest;
    haveTargetOrder = false;

    constructor(private orderService: OrderService,
                private userService: UserService,
                private toastService: ToastService,
                private reviewService: ReviewService) {
        this.bidRequest = new BidRequest();
        // plz review BidRequest, there shows some specification
    }

    get vendor(): Vendor {
        return this.userService.vendor;
    }
    get user(): User {
        return this.userService.user;
    }
    get bids(): Bid[] {
        return this.orderService.bids;
    }
    get reviews(): Review[] {
        return this.reviewService.reviews;
    }
    get orders() {
        return this.orderService.orders;
    }
    ngOnInit() {
        console.log('pending component init');
        this.bidRequest.vendor = this.vendor.id;
        this.getBids();
        this.reviewRequest.vendor = this.vendor.id;
        this.getReviews();
    }

    getBids() {
        this.orderService.getBids(this.bidRequest);
    }

    getReviews() {
        this.reviewService.getList(this.reviewRequest);
    }
}
