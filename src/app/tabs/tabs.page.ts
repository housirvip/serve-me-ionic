import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FirebaseService} from '../services/firebase.service';

import {MenuController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
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
            title: 'dashboard',
            url: '/tabs/dashboard',
            icon: 'home-outline'
        },
        {
            title: 'profile',
            url: '/tabs/profile',
            icon: 'person-outline'
        },
        {
            title: 'orders',
            url: '/tabs/orders',
            icon: 'clipboard-outline'
        },
        {
            title: 'settings',
            url: '/tabs/settings',
            icon: 'settings-outline'
        },
        {
            title: 'service provider',
            url: '/tabs/settings',
            icon: 'hammer-outline'
        }
    ];

    // selectedMenuPath = '';

    get user() {
        return this.userService.user;
    }

    constructor(private userService: UserService,
                private firebaseService: FirebaseService,
                private router: Router,
                private menu: MenuController,
                private modalController: ModalController) {
        // this.router.events.subscribe((event: RouterEvent) => {
        //     console.log('router event trigged:' + event.url);
        //     this.selectedMenuPath = event.url;
        // });
    }

    ngOnInit(): void {
        this.menu.enable(true, 'first').then(r => {
        });
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

    openMenu() {
        this.menu.open('first').then(r => {
        });
    }
}
