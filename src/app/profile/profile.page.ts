import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UserService} from '../services/user.service';

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
}
