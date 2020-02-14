import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FirebaseService} from '../services/firebase.service';

import {ModalController} from '@ionic/angular';
import {Router, RouterEvent} from '@angular/router';
import {LoginPage} from '../login/login.page';
import {RegisterPage} from '../register/register.page';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    menuPages = [
        {
            title: 'profile',
            url: '/tabs/profile',
            icon: 'person'
        },
        {
            title: 'settings',
            url: '/tabs/settings',
            icon: 'settings'
        },
        {
            title: 'service provider',
            url: '/tabs/settings',
            icon: 'hammer'
        }
    ];

    selectedMenuPath = '';

    get user() {
        return this.userService.user;
    }

    constructor(private userService: UserService,
                private firebaseService: FirebaseService,
                private router: Router,
                private modalController: ModalController) {
        this.router.events.subscribe((event: RouterEvent) => {
            console.log('router event trigged:' + event.url);
            this.selectedMenuPath = event.url;
        });
    }

    ngOnInit(): void {
        this.userService.getUser();
        this.firebaseService.notifyToUpdate();
    }

    async toLogin() {
        const modal = await this.modalController.create({
            component: LoginPage,
            cssClass: 'medium-modal'
        });
        return await modal.present();
    }

    async toRegister() {
        const modal = await this.modalController.create({
            component: RegisterPage,
            cssClass: 'medium-modal'
        });
        return await modal.present();
    }

    toLogout() {
        this.userService.logout();
    }
}
