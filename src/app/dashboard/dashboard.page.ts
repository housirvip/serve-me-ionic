import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TypePage} from './type/type.page';
import {LoginPage} from '../login/login.page';
import {FilterService} from '../services/filter.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {

    constructor(public modalController: ModalController,
                public  filterService: FilterService) {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: TypePage
        });
        return await modal.present();
    }

}
