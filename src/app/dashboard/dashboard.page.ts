import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TypePage} from './type/type.page';
import {FilterService} from '../services/filter.service';
import {PricePage} from './price/price.page';
import {ToastService} from '../services/toast.service';
import {VendorResult} from '../classes/vendor-result';
import {VendorService} from '../services/vendor.service';
import {VendorRequest} from '../classes/spec/vendor-request';
import {Vendor} from '../classes/vendor';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
    vendorRequest: VendorRequest;


    constructor(private modalController: ModalController,
                private toastService: ToastService,
                private vendorService: VendorService,
                private filterService: FilterService) {
        this.vendorRequest = new VendorRequest();
    }

    get vendors() {
        return this.vendorService.vendors;
        // return this.filterService.getVendorList();
    }

    ngOnInit() {
        this.vendorService.getVendors(this.vendorRequest);
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
