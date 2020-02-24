import {assertPlatform, Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {VerificationComponent} from './verification/verification.component';
import {tokenReference} from '@angular/compiler';


@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.page.html',
  styleUrls: ['./update-phone.page.scss'],
})
export class UpdatePhonePage implements OnInit {
  private  ifwarning: boolean;
  private  warningMessage: string;
  private applicationVerifier: firebase.auth.RecaptchaVerifier ;
  constructor(private modalController: ModalController,
              private afAuth: AngularFireAuth,
              private popoverController: PopoverController) {
      this.ifwarning = false;
      this.warningMessage = '' ;
  }
  private phoneNumber: string;

  ngOnInit() {
      this.applicationVerifier = new firebase.auth.RecaptchaVerifier(
          'recaptcha-container',
          {
              size: 'invisible'
          });
  }

    submitPhoneNumber() {
      console.log(this.phoneNumber);
      const USphoneNumber =  '+1' + this.phoneNumber;
      const provider = new firebase.auth.PhoneAuthProvider();
      provider.verifyPhoneNumber(USphoneNumber, this.applicationVerifier).then(
          (received) => {
              this.presentPopover(USphoneNumber, received).then(r => {});
          }
      ).catch(
          (res) => {
              // this.applicationVerifier.clear();
              this.ifwarning = true;
              this.warningMessage = res.message;
              console.log(res.message) ;

          }
   );

  }
  async presentPopover(ev: any, receiveCode: any) {
        const popover = await this.popoverController.create({
            component: VerificationComponent,
            componentProps: {phone: ev, recv: receiveCode, phoneNumber: this.phoneNumber},
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
