import {Component} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {RegisterPage} from '../register/register.page';
import {UserService} from '../services/user.service';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import {MePage} from '../me/me.page';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage {

    constructor(private modalController: ModalController,
                private userService: UserService,
                private toastController: ToastController,
                ) {
    }

    get user() {
        return this.userService.user;
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        return await toast.present();
    }

    async toMe() {
        const modal = await this.modalController.create({
            component: MePage,
            cssClass: 'medium-modal'
        });
        return await modal.present();
    }

}
