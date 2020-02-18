import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {ToastService} from '../../services/toast.service';

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
              private toastService: ToastService) {
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
          this.toastService.presentToast('verify phone successfull! ', 2000).then(r => {
          });
          this.dismiss();
            }

        ).catch(() => {
          this.ifVerificationRight = false;
        }
    );
  }


}
