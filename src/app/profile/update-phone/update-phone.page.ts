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

   async submitPhoneNumber() {
      console.log(this.phoneNumber);
      const USphoneNumber =  '+1' + this.phoneNumber;
      const applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible'
        }
    );
      const provider = new firebase.auth.PhoneAuthProvider();
      const receivecode = await provider.verifyPhoneNumber(USphoneNumber, applicationVerifier)
      this.presentPopover(USphoneNumber, receivecode);


  }
  async presentPopover(ev: any, reciveCode: any) {
        const popover = await this.popoverController.create({
            component: VerificationComponent,
            componentProps: {phone: ev, recv: reciveCode},
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
