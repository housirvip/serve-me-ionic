import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TypePage} from './type/type.page';
import {LoginPage} from '../login/login.page';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {

    constructor(public modalController: ModalController) {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: TypePage
        });
        return await modal.present();
    }

}
