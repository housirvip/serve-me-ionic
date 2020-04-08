import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {OrderStatus} from '../../classes/order-status';
import {DatetimeService} from '../../services/datetime.service';
import {Order} from '../../classes/order';
import {UpdatePhonePage} from '../../profile/update-phone/update-phone.page';
import {AlertController, ModalController, PopoverController} from '@ionic/angular';
import {BidingCheckPage} from './biding-check/biding-check.page';
import {Router} from '@angular/router';
import {ToastService} from '../../services/toast.service';
import {LoadingService} from '../../services/loading.service';
import {Location} from '@angular/common';
import {OrderRequest} from '../../classes/spec/order-request';

@Component({
    selector: 'app-biding',
    templateUrl: './biding.component.html',
    styleUrls: ['./biding.component.scss'],
})
export class BidingComponent implements OnInit, AfterViewInit {
    get orders() {
        return this.orderService.orders;
    }
    filterRequest: OrderRequest;

    constructor(
                private location: Location,
                private toastService: ToastService,
                private popover: PopoverController,
                private router: Router,
                private orderService: OrderService,
                private loadingService: LoadingService,
                private datetimeService: DatetimeService,
                private modalController: ModalController,
                private alertController: AlertController) {
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

    jump(path: string) {
        this.router.navigate([path]).then(() => {
        });
    }

    dismiss() {
        this.popover.dismiss().then(r => {
        });
    }

    async edit(request: any) {

    }

    async cancel(request: Order) {
        this.handleButtonClick(
            'Do you want to cancel the order?',
            () => {
                this.orderService.close(request);
                console.log(request.id);
                this.toastService.presentToast('canceled successfull! ', 2000).then(r => {
                });
                this.dismiss();

            },
            () => {
                this.toastService.presentToast('canceled failed! ', 2000).then(r => {
                });
                this.dismiss();
            });
    }

    async handleButtonClick(title, agree, disagree) {
        const alert = await this.alertController.create({
            header: title,
            // message: text,
            buttons: [{
                text: 'Yes',
                role: 'agree',
                handler: agree
            }
                , {
                    text: 'No',
                    role: 'Disgree',
                    handler: disagree
                }]
        });
        await alert.present();
    }
}
