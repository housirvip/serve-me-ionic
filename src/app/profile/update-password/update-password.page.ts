import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastService} from '../../services/toast.service';
import {firebase} from 'firebaseui-angular';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {

    private ifverificationCodeRight: boolean;
    private ifVerificated: boolean;
    private  ifcodeSent: boolean;
    private tipOnPassword: string;
    private applicationVerifier: firebase.auth.RecaptchaVerifier ;
    private phoneNumber: string;
    private verificationCode: string;
    private confirm: any;
  private password: string;
  constructor(private modalController: ModalController,
              private afAuth: AngularFireAuth,
              private toastService: ToastService) { }
     ngOnInit() {
      this.phoneNumber = this.afAuth.auth.currentUser.phoneNumber;
      this.ifVerificated = false;
      this.ifcodeSent = false;
      this.ifverificationCodeRight = true;
      this.applicationVerifier = new firebase.auth.RecaptchaVerifier(
          'recaptcha-container',
          {
              size: 'invisible'
          });
  }

submitPassword() {
    console.log(this.password);
    this.afAuth.auth.currentUser.updatePassword(this.password).then(
        res => {
            this.tipOnPassword = '';
            this.toastService.presentToast('change password successfull! ', 2000).then(r => {
          });
            console.log(res);
            this.dismiss();
        }
    ).catch(
          res => {
              this.tipOnPassword = res.message;
              console.log(res);
    }
    );
  }
async verifyPhoneNumber() {
       // add it to then but ,not work
       this.ifcodeSent = true;
       // provider.verifyPhoneNumber(this.phoneNumber, this.applicationVerifier).then( vid => {
       //     console.log('sent');
       //     this.verificationCode = vid;
       //
       // });
       this.confirm = await this.afAuth.auth.currentUser.reauthenticateWithPhoneNumber(this.phoneNumber, this.applicationVerifier);
   }
verifyCode() {

      this.confirm.confirm(this.verificationCode).then(
          cred => {
              this.ifVerificated = true;
              console.log('success');
          }
      ).catch(() => {
          this.ifverificationCodeRight = false;
      });
    }
dismiss() {
    console.log('passwordpage dissmiss');
    this.modalController.dismiss('test').then(() => {
    });
  }


}
