import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Auth} from '../classes/auth';
import {UserService} from '../services/user.service';
import {ToastService} from '../services/toast.service';
import {FirebaseService} from '../services/firebase.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    authForm: FormGroup;

    requiredInformation = [
        {
            title: 'email',
            formControlName: 'email',
            icon: 'mail',
            type: 'text'
        },
        {
            title: 'password',
            formControlName: 'password',
            icon: 'lock-closed',
            type: 'password'
        }
    ];

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private firebaseService: FirebaseService,
                private toastService: ToastService) {
        this.authForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email,
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
                        this.toastService.presentToast('Login Successfully', 2000).then(() => {
                        });
                        // refresh user detail info after user login
                        this.userService.getUser();
                        // update the local mobile firebase token to server
                        this.firebaseService.notifyToUpdate();
                        // close this modal
                        this.dismiss();
                    }
                });

        }
    }
}
