import {Component, Input, OnInit} from '@angular/core';
import {ToastService} from '../../services/toast.service';
import {ModalController, NavParams, PopoverController} from '@ionic/angular';
import {OrderService} from '../../services/order.service';
import {OrderStatus} from '../../classes/order-status';
import {Order} from '../../classes/order';

class WorkType {
}

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.page.html',
    styleUrls: ['./request-details.page.scss'],
})
export class RequestDetailsPage implements OnInit {
    @Input() order: Order;

    constructor(
        private orderService: OrderService,
        private modalController: ModalController,
        public popoverController: PopoverController,
        private toastService: ToastService,
        private navParams: NavParams
    ) {
    }

    ngOnInit() {
        const something = this.navParams.get('request');
        console.log(this.order);
        console.log(something);
    }

    onBackPressed() {
        this.modalController.dismiss('test').then(() => {
        });
    }

}
