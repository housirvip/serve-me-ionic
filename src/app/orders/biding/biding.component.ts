import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {OrderStatus} from '../../classes/order-status';
import {DatetimeService} from '../../services/datetime.service';
import {Order} from '../../classes/order';
import {UpdatePhonePage} from '../../profile/update-phone/update-phone.page';
import {ModalController} from '@ionic/angular';
import {BidingCheckPage} from './biding-check/biding-check.page';

@Component({
    selector: 'app-biding',
    templateUrl: './biding.component.html',
    styleUrls: ['./biding.component.scss'],
})
export class BidingComponent implements OnInit, AfterViewInit {
    get orders() {
        return this.orderService.orders;
    }

    constructor(private orderService: OrderService,
                private datetimeService: DatetimeService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        console.log('biding component init');
        //  this.orderService.getOrders(OrderStatus.Biding);
    }

    ngAfterViewInit() {
    }

    async bidsCheck(request: Order) {
        if (!request.bids.length) {
            return;
        }
        console.log('checkBids');
        const modal = await this.modalController.create({
            component: BidingCheckPage,
            componentProps: { req: request }

        });
        return await modal.present();

    }
}
