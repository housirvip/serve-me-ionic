import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TypePage} from './type/type.page';
import {FilterService} from '../services/filter.service';
import {PricePage} from './price/price.page';
import {ToastService} from '../services/toast.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
    get vendors() {
        return this.filterService.getVendorList();
    }

    constructor(private modalController: ModalController,
                private toastService: ToastService,
                private  filterService: FilterService) {
    }

    ngOnInit() {
        // this.filterService.getVendorList();
    }

    async typeModal() {
        const modal = await this.modalController.create({
            component: TypePage
        });
        return await modal.present();
    }

    async priceModal() {
        const modal = await this.modalController.create({
            component: PricePage
        });
        return await modal.present();
    }

    doRefresh(event) {
        setTimeout(() => {
            this.toastService.presentToast('updated', 2000).then(() => {
            });
            event.target.complete();
        }, 1000);
    }

    doSearch(event) {
        this.toastService.presentToast('your input: ' + event.target.value, 2000).then(() => {
        });
    }
}
