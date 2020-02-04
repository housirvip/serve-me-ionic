import {Component} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {RegisterPage} from '../register/register.page';
import {UserService} from '../services/user.service';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

@Component({
    selector: 'app-my',
    templateUrl: 'my.page.html',
    styleUrls: ['my.page.scss']
})
export class MyPage {

    constructor(private modalController: ModalController,
                private userService: UserService,
                private toastController: ToastController,
                private fingerprintAIO: FingerprintAIO) {
    }

    get user() {
        return this.userService.user;
    }

    async toLogin() {
        const modal = await this.modalController.create({
            component: LoginPage
        });
        return await modal.present();
    }

    async toRegister() {
        const modal = await this.modalController.create({
            component: RegisterPage
        });
        return await modal.present();
    }

    toLogout() {
        this.userService.logout();
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        return await toast.present();
    }

    toFingerPrint() {
        this.fingerprintAIO.show({
            description: 'Please touch your finger'
        })
            .then((result: any) => {
                this.presentToast(result).then(() => {
                });
            })
            .catch((error: any) => {
                this.presentToast(error.message).then(() => {
                });
            });
    }
}
