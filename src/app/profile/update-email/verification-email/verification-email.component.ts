import {Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {ToastService} from '../../../services/toast.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../classes/user';

@Component({
    selector: 'app-verification',
    templateUrl: './verification-email.component.html',
    styleUrls: ['./verification-email.component.scss'],
})
export class VerificationEmailComponent implements OnInit {

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
        // tslint:disable-next-line:only-arrow-functions
        this.ifVerificationRight = true;
        const provider = this.afAuth.auth.currentUser;
        const verificationId = this.navParams.get('recv');
        const cred = firebase.auth.PhoneAuthProvider.credential(verificationId, this.code);
        provider.reauthenticateWithCredential(cred).then((res) => {
                console.log('verfiy success');
                console.log(res);
                this.toastService.presentToast('verify phone successfull! ', 2000).then(r => {
                });
                provider.updateEmail(this.navParams.get('email')).then();
                const user = new User();
                console.log(this.navParams);
                user.email = this.navParams.get('email');
                console.log(user);
                this.userService.updateUser(user);
                this.dismiss();
            }
        ).catch((res) => {
                console.log('verfiy failed');
                console.log(res);
                this.ifVerificationRight = false;
            }
        );
    }
}
