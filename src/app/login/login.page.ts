import {Component} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Auth} from '../classes/auth';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    authForm: FormGroup;

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private toastController: ToastController) {
        this.authForm = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(40)
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(40)
            ]))
        });
    }

    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        }).then(() => {
        });
    }

    doLogin() {
        if (this.authForm.valid) {
            this.userService.login(this.authForm.value as Auth).then(
                res => {
                    if (res.code === 0) {
                        this.presentToast('Login Successfully').then(() => {
                        });
                        this.dismiss();
                    }
                });

        }
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        return await toast.present();
    }
}
