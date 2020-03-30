import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {AlertController, MenuController, ModalController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {ToastService} from '../services/toast.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {UpdateaddressPage} from '../address/updateaddress/updateaddress.page';
import {FcmService} from '../services/fcm.service';
import {VersionService} from '../services/version.service';

@Component({
  selector: "app-slide-menu",
  templateUrl: "./slide-menu.component.html",
  styleUrls: ["./slide-menu.component.scss"]
})
export class SlideMenuComponent implements OnInit {
  @Input() menuId: string;
  @Input() contentId: string;
  serviceProviderView = false;

  defaultPhoto = "../../assets/img/avatar.png";

    get user() {
        return this.userService.user;
    }

    get afUser() {
        return this.afAuth.auth.currentUser;
    }

    get shouldUpdate() {
        return this.versionService.shouldUpdate;
    }

    constructor(private userService: UserService,
                private router: Router,
                private menu: MenuController,
                private toastService: ToastService,
                private afAuth: AngularFireAuth,
                private fcmService: FcmService,
                private versionService: VersionService,
                private modalController: ModalController,
                private alertController: AlertController) {
    }

    ngOnInit() {
        this.versionService.checkAppUpdate();
        this.menu.enable(true, 'first').then(r => {
        });
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

  async toLogin() {
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: "medium-modal"
    });
    return await modal.present();
  }

  verifyEmail() {
    this.userService
      .verifyEmail()
      .then(() => {
        this.toastService
          .presentToast("email send successfully", 2000)
          .then(r => {})
          .then(() => {
            console.log("this.verifyEmail().then.then() trigged");
          });
      })
      .catch(() => {});
  }

    jump(path: string) {
        this.router.navigate([path]).then(() => {
        });
    }

    vendor() {
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

    async updateAddress() {
        const modal = await this.modalController.create({
            component: UpdateaddressPage
        });
        modal.onDidDismiss().then((data) => {
            console.log('dissmisss');
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


}
