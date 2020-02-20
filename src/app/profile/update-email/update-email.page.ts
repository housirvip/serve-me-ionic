import {assertPlatform, Component, OnInit} from '@angular/core';
import {ModalController, NavParams, PopoverController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import {VerificationEmailComponent} from './verification-email/verification-email.component';
import {tokenReference} from '@angular/compiler';
import {ToastService} from '../../services/toast.service';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';


@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.page.html',
  styleUrls: ['./update-email.page.scss'],
})
export class UpdateEmailPage implements OnInit {
  private ifwarning: boolean;

  private warningMessage: string;
  private applicationVerifier: firebase.auth.RecaptchaVerifier;


  constructor(private modalController: ModalController,
              private afAuth: AngularFireAuth,
              private toastService: ToastService,
              private userService: UserService,
              public navParams: NavParams,
              private popoverController: PopoverController) {
    this.ifwarning = false;
    this.warningMessage = '';
  }
  private email: string;

  ngOnInit() {
    this.applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible'
        });
  }

  submitEmail() {
    console.log(this.email);
    const provider = this.afAuth.auth.currentUser;
    if (!provider.phoneNumber) {
      // tslint:disable-next-line:no-shadowed-variable
      this.toastService.presentToast('please verified phonenumber', 2000).then(r => {
      });
      this.dismiss();
    }
    provider.updateEmail(this.email).then(r => {
      const user = new User();
      user.email = this.email;
      console.log(user);
      // tslint:disable-next-line:no-shadowed-variable
      this.userService.updateUser(user).then(r => {
        console.log(r);
      });
      this.dismiss();
    }).catch(
        (err) => {
          if (err.code === 'auth/requires-recent-login') {
            const providerPhone = new firebase.auth.PhoneAuthProvider();
            providerPhone.verifyPhoneNumber(provider.phoneNumber, this.applicationVerifier).then(
                (received) => {
                  this.presentPopover(provider.phoneNumber, received).then(r => {});
                }// todo
            ).catch(
                (res) => {
                  // this.applicationVerifier.clear();
                  this.ifwarning = true;
                  this.warningMessage = res.message;
                  console.log(res.message);
                });
          } else {
            this.warningMessage = err.message;
          }
          console.log(err);
          // this.dismiss();
        }
    );

  }

  async presentPopover(ev: any, receiveCode: any) {
    const popover = await this.popoverController.create({
      component: VerificationEmailComponent,
      componentProps: {phone: ev, recv: receiveCode, email: this.email},
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
