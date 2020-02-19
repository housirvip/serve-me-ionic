import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {ToastService} from '../../../services/toast.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../classes/user';

@Component({
  selector: 'app-verification',
  templateUrl: './verification-phone.component.html',
  styleUrls: ['./verification-phone.component.scss'],
})
export class VerificationPhoneComponent implements OnInit {

  private code: string;
  private ifVerificationRight: boolean;

  constructor(private popover: PopoverController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private toastService: ToastService,
              private userService: UserService) {
    this.ifVerificationRight = true;

  }


  ngOnInit() {}

  dismiss() {
    this.popover.dismiss();
  }

  verify() {
    // tslint:disable-next-line:only-arrow-functions
    this.ifVerificationRight = true;
    const verificationId = this.navParams.get('recv');
    const cred =  firebase.auth.PhoneAuthProvider.credential(verificationId, this.code);
    this.afAuth.auth.currentUser.updatePhoneNumber(cred).then((res) => {
      // verify phone successful
      // send phone number to backend
            console.log('verfiy success');
            console.log(res);
            this.toastService.presentToast('verify phone successfull! ', 2000).then(r => {
          });
            const user = new User();
            user.phone = this.navParams.get('phoneNumber');
            console.log(user);
            this.userService.updateUser(user).then(r => {
                console.log(r);
            });
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
