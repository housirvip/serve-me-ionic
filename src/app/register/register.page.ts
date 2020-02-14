import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {Auth} from '../classes/auth';
import {UserService} from '../services/user.service';
import {ToastService} from '../services/toast.service';
import {FirebaseService} from '../services/firebase.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
    authForm: FormGroup;

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private firebaseService: FirebaseService,
                private toastService: ToastService) {
        this.authForm = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(40)
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(40)
            ])),
            password2: new FormControl('', Validators.compose([
                Validators.required
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email
            ])),
            phone: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(40)
            ]))
        }, {
            validator: this.mustMatch('password', 'password2')
        });
    }

    mustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({mustMatch: true});
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        }).then(() => {
        });
    }

    doRegister() {
        if (this.authForm.valid) {
            this.userService.register(this.authForm.value as Auth).then(
                res => {
                    if (res.code === 0) {
                        this.toastService.presentToast('Register Successfully', 2000).then(() => {
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
