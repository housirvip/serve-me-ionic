import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {MePage} from '../me/me.page';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage {

    constructor(private modalController: ModalController,
                private userService: UserService) {
    }

    get user() {
        return this.userService.user;
    }

    async toMe() {
        const modal = await this.modalController.create({
            component: MePage,
            cssClass: 'medium-modal'
        });
        return await modal.present();
    }
}
