import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {AlertController, MenuController, ModalController, PopoverController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {ToastService} from '../services/toast.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {UpdateaddressPage} from '../address/updateaddress/updateaddress.page';
import {FcmService} from '../services/fcm.service';
import {VersionService} from '../services/version.service';
import {VendorService} from '../services/vendor.service';
import {Vendor} from '../classes/vendor';

@Component({
    selector: 'app-slide-menu',
    templateUrl: './slide-menu.component.html',
    styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {
    @Input() menuId: string;
    @Input() contentId: string;

    defaultPhoto = '../../assets/img/avatar.png';

    get user() {
        return this.userService.user;
    }

    get shouldUpdate() {
        return this.versionService.shouldUpdate;
    }

    get vendor() {
        // console.log(this.vendorService.vendor);
        return this.vendorService.vendor;
    }

    constructor(private userService: UserService,
                private router: Router,
                private menu: MenuController,
                private toastService: ToastService,
                private afAuth: AngularFireAuth,
                private fcmService: FcmService,
                private vendorService: VendorService,
                private popover: PopoverController,
                private versionService: VersionService,
                private modalController: ModalController,
                private alertController: AlertController) {
        // this.vendorService.getIncomes();
    }

    ngOnInit() {
        this.versionService.checkAppUpdate();
        this.menu.enable(true, 'first').then(r => {
        });
        // this.vendorService.getIncomes();
        // this.account = this.vendorService.account;
        // console.log(this.vendor.summary);
    }

    appUpdate() {
        this.versionService.checkAppUpdate();
    }

    async toLogin() {
        const modal = await this.modalController.create({
            component: LoginPage,
            cssClass: 'medium-modal'
        });
        return await modal.present();
    }

    verifyEmail() {
        this.userService.verifyEmail().then(() => {
            this.toastService.presentToast('email send successfully', 2000).then(r => {
            }).then(() => {
                console.log('this.verifyEmail().then.then() trigged');
            });
        }).catch(() => {
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

    isVendor() {
        if (this.userService.vendorView) {
            this.userService.vendorView = false;
            this.jump('/dashboard');
            return;
        }
        if (this.userService.isVendor) {
            this.jump('/vendor-page');
            this.userService.vendorView = true;
        } else {
            this.handleButtonClick(
                'You are not a Vendor ', 'Do you want to register as a Vendor?',
                () => {
                    console.log('agree');
                    this.jump('/vendor-registration');
                },
                () => {
                    console.log('disagree');
                    this.userService.vendorView = false;
                });
        }
    }

    dismiss() {
        this.popover.dismiss().then(r => {
        });
    }

    earnings() {
        if (this.userService.vendorView && this.userService.isVendor) {
            this.vendorService.getIncomes(res => {
                this.handleButtonClickOne(
                    'Total Earnings: ', res + '$ from ServeMe',
                    () => {
                        // console.log(this.vendor.summary);
                        this.dismiss();
                    }).then(r => {});
            });
        }
    }

    async updateAddress() {
        const modal = await this.modalController.create({
            component: UpdateaddressPage
        });
        modal.onDidDismiss().then((data) => {
            console.log('dismiss');
            console.log(data);
        });
        return await modal.present();
    }

    async handleButtonClick(title, text, agree, disagree) {
        const alert = await this.alertController.create({
            header: title,
            message: text,
            buttons: [{
                text: 'Agree',
                role: 'agree',
                handler: agree
            }
                , {
                    text: 'Disgree',
                    role: 'Disgree',
                    handler: disagree
                }]
        });

        await alert.present();
    }

    async handleButtonClickOne(title, text, back) {
        const alert = await this.alertController.create({
            header: title,
            message: text,
            buttons: [{
                text: 'cancel',
                role: 'cancel',
                handler: back
            }]
        });

        await alert.present();
    }
}
