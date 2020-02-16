import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {MenuController, ModalController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {RegisterPage} from '../register/register.page';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-slide-menu',
    templateUrl: './slide-menu.component.html',
    styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {
    @Input() menuId: string;
    @Input() contentId: string;


    get user() {
        return this.userService.user;
    }

    constructor(private userService: UserService,
                private router: Router,
                private menu: MenuController,
                private modalController: ModalController,
                public  afAuth: AngularFireAuth) {
    }

    ngOnInit() {
        this.menu.enable(true, 'first').then(r => {
        });
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

    veryfiyEmail() {

        const user = this.afAuth.auth.currentUser;

        user.sendEmailVerification().then(() => {
        }).catch(() => {
        });
    }

    toLogout() {
        // this.userService.logout();
        this.afAuth.auth.signOut().then( () => {
             location.reload();
            }

        );
    }
}
