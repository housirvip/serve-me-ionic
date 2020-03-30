import {Component, Input, OnInit} from '@angular/core';
import {ToastService} from '../../services/toast.service';
import {ModalController, NavParams, PopoverController} from '@ionic/angular';
import {OrderService} from '../../services/order.service';
import {OrderStatus} from '../../classes/order-status';
import {Order} from '../../classes/order';
import {BidPopoverComponent} from './bid-popover/bid-popover.component';
import {DatetimeService} from '../../services/datetime.service';

class WorkType {
}

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.page.html',
    styleUrls: ['./request-details.page.scss'],
})
export class RequestDetailsPage implements OnInit {
    order: Order;
    // tslint:disable-next-line:variable-name
    best_bid: string;

    constructor(
        private orderService: OrderService,
        private modalController: ModalController,
        public popoverController: PopoverController,
        private toastService: ToastService,
        private navParams: NavParams,
        private datetimeService: DatetimeService
    ) {
    }

    ngOnInit() {
        const request = this.navParams.get('request');
        this.order = request;
        this.best_bid = 'No bids';

        if (this.order.bids.length) {
            const best = this.order.bids
                .map(x => x.price)
                .reduce((acc, cv) => {
                    return acc < cv ? acc : cv;
                }, Number.POSITIVE_INFINITY);
            this.best_bid = '$' + best;
        }
    }

    onBackPressed(data) {
        this.modalController.dismiss(data).then(() => {
        });
    }

    async onPlaceBidPressed(ev: any) {
        const popover = await this.popoverController.create({
            component: BidPopoverComponent,
            // event: ev, //use this if you want the popover to be generated at the position of the click
            backdropDismiss: true,
            componentProps: {order: this.order}
        });
        await popover.present();
        popover.onWillDismiss().then(result => {
            if (result.data) {
                console.log(result.data);
                this.onBackPressed(result.data);
                // if (result.data < this.order_price || this.order_price == 0) {
                //     // if the submitted bid is les than the current lowest bid OR if the current lowest bid is 0 (no bids yet)
                //     this.order_price = result.data;
                //     // this.doRefresh(ev);
                // }
            }
        });
        return;
    }

    async onPlaceBid() {
        const popover = await this.popoverController.create({
            component: BidPopoverComponent,
        });
        await popover.present();

    }
}
