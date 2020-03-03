import {Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {ToastService} from '../../../services/toast.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../classes/user';

@Component({
    selector: 'app-verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {

    private code: string;
    private ifVerificationRight: boolean;

    constructor(private popover: PopoverController,
                public navParams: NavParams,
                private afAuth: AngularFireAuth,
                private toastService: ToastService,
                private userService: UserService) {
        this.ifVerificationRight = true;

    }


    ngOnInit() {
    }

    dismiss() {
        this.popover.dismiss().then(r => {
        });
    }

    verify() {
        this.ifVerificationRight = true;
        const verificationId = this.navParams.get('recv');
        const cred = firebase.auth.PhoneAuthProvider.credential(verificationId, this.code);
        this.afAuth.auth.currentUser.updatePhoneNumber(cred).then((res) => {
            // verify phone successfull
            // send phone number to backend
            console.log('verfiy success');
            console.log(res);
            this.toastService.presentToast('verify phone successfull! ', 2000).then(r => {
            });
            const user = new User();
            user.phone = this.navParams.get('phoneNumber');
            console.log(user);
            this.userService.updateUser(user);
            this.dismiss();
        }).catch((err) => {
                console.log('verfiy failed');
                console.log(err);
                this.ifVerificationRight = false;
            }
        );
    }


}
