import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {TypePage} from '../dashboard/type/type.page';
import {UpdatePhonePage} from './update-phone/update-phone.page';


@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage implements  OnInit {

    constructor(private modalController: ModalController,
                private userService: UserService) {
    }

    get user() {
        return this.userService.user;
    }

    async updatePhonemModal() {
        const modal = await this.modalController.create({
            component: UpdatePhonePage
        });
        return await modal.present();
    }

    ngOnInit(): void {
        console.log(this.userService.user);
    }



}
