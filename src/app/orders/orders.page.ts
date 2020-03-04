import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {OrderService} from '../services/order.service';
import {Order} from '../classes/order';
import {OrderStatus} from '../classes/order-status';
import {ToastService} from '../services/toast.service';
import {OrderDetailsPage} from './order-details/order-details.page';
import {UserService} from '../services/user.service';
import {LoadingService} from '../services/loading.service';
import * as moment from 'moment';
import * as linq from "linq-typescript";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss']
})
export class OrdersPage implements OnInit {
    orderStatus: OrderStatus;
    orders: Order[];
    serviceProviderView: boolean;

    constructor(
        private orderService: OrderService,
        private modalController: ModalController,
        private toastService: ToastService,
        private loadingService: LoadingService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        // this.serviceProviderView = this.userService.isVendorViewEnabled;
        this.serviceProviderView = true;
        console.log(
            'serviceProviderView in Orders Page: ',
            this.serviceProviderView
        );
        this.orderStatus = OrderStatus.Waiting;
        this.getOrders(this.orderStatus);
    }

    getOrders(status: OrderStatus) {
        this.loadingService.present();
        this.orderService.getOrders(status).subscribe( res =>{
            console.log(res.result);
            this.loadingService.dismiss();
            if (res.code !== 0) {
                this.orders = [];
                return;
            }
            this.orders = res.result;
            this.orders = this.orders.filter(x => x.status == status);
            console.log('Order count:', this.orders.length);
        });
    }

    stringify_best_bid(order: Order): string{
        if (!order || !order.bids || order.bids.length == 0){
            return "0";
        }
        const bids = new linq.List(order.bids);
        const best_bid = bids.min(x => x.price);
        return best_bid.toString();
    }

    stringify_time(order: Order): string{
        return moment(order.time).format('MM/DD - HH:mm');
    }

    segmentChanged(ev: any) {
        this.orderStatus = ev.detail.value;
        this.getOrders(this.orderStatus);
    }

    doRefresh(event) {
        setTimeout(() => {
            this.toastService.presentToast('updated', 2000).then(() => {
                this.getOrders(this.orderStatus);
            });
            event.target.complete();
        }, 1000);
    }

    async orderDetailsModal(order: Order) {
        const modal = await this.modalController.create({
            component: OrderDetailsPage,
            componentProps: {
                order
            }
        });
        return await modal.present();
    }
}
