import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../services/user.service';
import {ToastService} from '../services/toast.service';
import {FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import {User} from '../classes/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private toastService: ToastService) {
    }

    successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
        // console.log(signInSuccessData);
        if (signInSuccessData.authResult.additionalUserInfo.isNewUser) {
            const user: User = new User();
            user.email = signInSuccessData.authResult.user.email;
            user.phone = signInSuccessData.authResult.user.phoneNumber;
            user.username = signInSuccessData.authResult.user.displayName;
            user.firebaseUid = signInSuccessData.authResult.user.uid;
            this.userService.newUser(user);
            this.toastService.presentToast('Sign up successfully', 2000).then(r => {
            });
        } else {
            this.toastService.presentToast('Sign in successfully', 2000).then(r => {
            });
        }
        // close this modal
        this.dismiss();
    }

    errorCallback(errorData: FirebaseUISignInFailure) {
        console.log(errorData);
    }

    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        }).then(() => {
        });
    }
}
