import {Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {ToastService} from '../../../services/toast.service';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../classes/order';
import {Bid} from '../../../classes/bid';
import {UserService} from '../../../services/user.service';


@Component({
    selector: 'app-bid-popover',
    templateUrl: './bid-popover.component.html',
    styleUrls: ['./bid-popover.component.scss'],
})
export class BidPopoverComponent implements OnInit {

    // tslint:disable-next-line:variable-name
    bid_amount: number;
    // tslint:disable-next-line:variable-name
    bid_message: string;
    order: Order;

    constructor(
        private orderService: OrderService,
        private toastService: ToastService,
        private userService: UserService,
        private popoverController: PopoverController,
        private navParams: NavParams
    ) {
        this.order = this.navParams.get('order');
    }

    ngOnInit() {
        console.log('Order details:');
        console.log('Title: ', this.order.title);
        console.log('Description: ', this.order.description);
    }

    onFormSubmit() {
        if (!this.bid_amount) {
            // bid amount wasn't set
            this.toastService.presentToast('Please input a bid ammount', 1000);
        } else {
            console.log('bid amount: ', this.bid_amount);
            console.log('bid message: ', this.bid_message);

            console.log(this.userService);

            const bid = new Bid();
            console.log(this.order);
            // bid.vid = this.userService.vendor.id;
            bid.order = this.order;
            bid.price = this.bid_amount;
            bid.description = this.bid_message;
            this.orderService.bid(bid).subscribe(res => {
                if (res.code === 0) {
                    this.dissmissPopover();
                    this.toastService.presentToast('Bid successful!', 1000);
                }
            });


        }
    }

    async dissmissPopover() {
        await this.popoverController.dismiss(this.bid_amount);
    }

}
