import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TypePage} from './type/type.page';
import {LoginPage} from '../login/login.page';
import {FilterService} from '../services/filter.service';
import {PricePage} from './price/price.page';
import {OrderStatus} from '../classes/order-status';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
    get vendors() {
        return this.filterService.vendorList;
    }

    constructor(public modalController: ModalController,
                public  filterService: FilterService) {
    }

    ngOnInit() {
        this.filterService.getVendorList();
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

}
