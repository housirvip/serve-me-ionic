import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {TypePage} from '../dashboard/type/type.page';
import {UpdatePhonePage} from './update-phone/update-phone.page';
import { Router } from '@angular/router';
import {UpdatePasswordPage} from './update-password/update-password.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})


export class ProfilePage implements  OnInit {

    // example values. Acutal values should be retrieved from db
    // tslint:disable-next-line:variable-name
    user_points = '4500';
    // tslint:disable-next-line:variable-name
    user_name = 'Javier';
    // tslint:disable-next-line:variable-name
    user_phone = '214-374-9439';
    // tslint:disable-next-line:variable-name
    user_email = 'javieralexcastro95@gmail.com';
    // tslint:disable-next-line:variable-name
    user_password = '****';
    // tslint:disable-next-line:variable-name
    user_verified = 'unverified';

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private router: Router
  ) {}

    get user() {
        return this.userService.user;
    }

    async updatePhonemModal() {
      // user already have a phone number ,the phone number of this user must have been verifed
        console.log(this.userService.user);
        // hack
        if (this.userService.user.phone) {
            return;
        }

        const modal = await this.modalController.create({
            component: UpdatePhonePage
        });
        return await modal.present();
    }
    async updatePasswordModal() {


        const modal = await this.modalController.create({
            component: UpdatePasswordPage
        });
        return await modal.present();
    }

    ngOnInit(): void {
            console.log(this.user);
            console.log(this.userService.emailVerified);
            if (this.userService.emailVerified === true) {
            this.email_verified = 'verified';
        } else {
            this.email_verified = 'unverified';
        }
    }


  edit(field: string) {
    this.router.navigate(['/edit', field]);
  }
}
