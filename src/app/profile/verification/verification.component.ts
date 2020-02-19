import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {ToastService} from '../../services/toast.service';
import {UserService} from '../../services/user.service';

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


  ngOnInit() {}

  dismiss() {
    this.popover.dismiss();
  }

  verify() {
    // tslint:disable-next-line:only-arrow-functions
    this.ifVerificationRight = true;
    const verificationId = this.navParams.get('recv');
    const cred =  firebase.auth.PhoneAuthProvider.credential(verificationId, this.code);
    this.afAuth.auth.currentUser.updatePhoneNumber(cred).then(() => {
      // verify phone successfull
      // send phone number to backend
            console.log('verfiy success');
            this.toastService.presentToast('verify phone successfull! ', 2000).then(r => {
          });
           // this.userService.updateUser()
          // HACK
          // simply update phoneNumer on front end for test
          // this.userService.user.phone = this.afAuth.auth.currentUser.phoneNumber
            console.log(this.userService.user);
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
