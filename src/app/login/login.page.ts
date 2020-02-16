import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Auth} from '../classes/auth';
import {UserService} from '../services/user.service';
import {ToastService} from '../services/toast.service';
import {FirebaseService} from '../services/firebase.service';
import {FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private firebaseService: FirebaseService,
                private toastService: ToastService,
                private  afAuth: AngularFireAuth) {
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

    successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
        console.log(signInSuccessData);
        console.log(this.afAuth.idToken);
        this.afAuth.idToken.subscribe(r => {
            console.log(r);
        });



        // 注册成功
        // 向后台发送要建立新用户的信息
        // {
        //     token:
        //     Email:
        //     UserName:
        // }

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

    forgotPass() {
    }
}
