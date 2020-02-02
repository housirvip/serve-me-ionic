import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {RegisterPage} from '../register/register.page';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-my',
    templateUrl: 'my.page.html',
    styleUrls: ['my.page.scss']
})
export class MyPage {

    constructor(private modalController: ModalController,
                private userService: UserService) {
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
}
