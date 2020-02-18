import { Component, OnInit } from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {VerificationComponent} from '../verification/verification.component';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.page.html',
  styleUrls: ['./update-phone.page.scss'],
})
export class UpdatePhonePage implements OnInit {

  constructor(private modalController: ModalController,
              private afAuth: AngularFireAuth,
              private popoverController: PopoverController) { }
  private phoneNumber: string;

  ngOnInit() {
  }

  submitPhoneNumber() {
      console.log(this.phoneNumber);
      const USphoneNumber =  '+1' + this.phoneNumber;
    //   const applicationVerifier = new firebase.auth.RecaptchaVerifier(
    //     'recaptcha-container',
    //     {
    //       size: 'invisible'
    //     }
    // );
    //   const provider = new firebase.auth.PhoneAuthProvider();
    //   provider.verifyPhoneNumber(USphoneNumber, applicationVerifier)
    // // tslint:disable-next-line:only-arrow-functions
    //     .then(function(verificationId) {
    //       const verificationCode = window.prompt('Please enter the verification ' +
    //           'code that was sent to your mobile device.');
    //       return firebase.auth.PhoneAuthProvider.credential(verificationId,
    //           verificationCode);
    //     })
    //     // tslint:disable-next-line:only-arrow-functions
    //     .then(phoneCredential => {
    //       console.log(phoneCredential);
    //       this.afAuth.auth.currentUser.updatePhoneNumber(phoneCredential).then(
    //           () => {
    //             console.log('update successful');
    //           }
    //       );
    //     });
      this.presentPopover(USphoneNumber);

  }
  async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: VerificationComponent,
            componentProps: {phone: ev},
            translucent: true
        });
        return await popover.present();
    }


  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    }).then(() => {
    });
  }

}
