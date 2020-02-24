import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {User} from '../../classes/user';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../services/user.service';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.page.html',
  styleUrls: ['./update-name.page.scss'],
})
export class UpdateNamePage implements OnInit {

  inputtedName: string;
  constructor(private modalController: ModalController,
              private afAuth: AngularFireAuth,
              private userService: UserService,
              private toastService: ToastService) { }

  ngOnInit() {
  }

  dismiss() {
    console.log('passwordpage dissmiss');
    this.modalController.dismiss('test').then(() => {
    });
  }
  submitName() {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: this.inputtedName,
      photoURL: this.afAuth.auth.currentUser.photoURL
    }).then(res => {
          const  user = new User();
          user.username = this.inputtedName;
          this.userService.updateUser(user).then();
          this.toastService.presentToast('change name successfull! ', 2000).then(r => {
      });
          this.dismiss();
        }
    );
  }

}
