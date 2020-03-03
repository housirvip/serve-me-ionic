import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {MenuController, ModalController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {ToastService} from '../services/toast.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-slide-menu',
    templateUrl: './slide-menu.component.html',
    styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
    @Input() menuId: string;
    @Input() contentId: string;
    serviceProviderView = false;

    defaultPhoto = '../../assets/img/avatar.png';

    get user() {
        return this.userService.user;
    }

    get afUser() {
        return this.afAuth.auth.currentUser;
    }

    constructor(
        private userService: UserService,
        private router: Router,
        private menu: MenuController,
        private toastService: ToastService,
        private afAuth: AngularFireAuth,
        private modalController: ModalController
    ) {
    }

    ngOnInit() {
        // this.serviceProviderView = false; //initialize to false
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

    verifyEmail() {
        this.userService
            .verifyEmail()
            .then(() => {
                this.toastService
                    .presentToast('email send successfully', 2000)
                    .then(r => {
                    })
                    .then(() => {
                        console.log('this.verifyEmail().then.then() trigged');
                    });
            })
            .catch(() => {
            });
    }

    toLogout() {
        this.userService.logout();
        this.jump('');
    }

    jump(path: string) {
        this.router.navigate([path]).then(() => {
        });
    }

    onChange() {
        console.log('Toggled service provider view: ' + this.serviceProviderView);
        this.userService.setVendorView(this.serviceProviderView);
    }
}
