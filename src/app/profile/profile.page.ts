import {Component, OnInit} from '@angular/core';
import {ActionSheetController, LoadingController, ModalController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {UpdatePhonePage} from './update-phone/update-phone.page';
import {Router} from '@angular/router';
import {UpdatePasswordPage} from './update-password/update-password.page';
import {UpdateEmailPage} from './update-email/update-email.page';
import * as firebase from 'firebase';
import {ImageService} from '../services/image.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../classes/user';
import {ToastService} from '../services/toast.service';
import {UpdateNamePage} from './update-name/update-name.page';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss']
})


export class ProfilePage implements OnInit {

    // example values. Acutal values should be retrieved from db
    // tslint:disable-next-line:variable-name
    user_points = '4500';
    // tslint:disable-next-line:variable-name
    user_name = 'Javier';
    // tslint:disable-next-line:variable-name
    user_phone = '214-374-9439';
    // tslint:disable-next-line:variable-name
    user_email = 'javieralexcastro95@gmail.com';
    // tslint:disable-next-line:variable-name
    user_password = '****';
    // tslint:disable-next-line:variable-name
    email_verified = 'unverified';
    // tslint:disable-next-line:variable-name
    default_photoUrl = './../assets/img/avatar.png';



    constructor(
        private modalController: ModalController,
        private userService: UserService,
        private router: Router,
        private actionSheetController: ActionSheetController,
        private imageService: ImageService,
        private afAuth: AngularFireAuth,
        private toastService: ToastService,
        private loadingController: LoadingController
    ) {
    }

    get user() {
        // console.log(this.userService.user);
        return this.userService.user;
    }

    async updatePhonemModal() {
        // user already have a phone number ,the phone number of this user must have been verifed
        console.log(this.userService.user);
        // hack
        if (this.userService.user.phone) {
            return;
        }

        const modal = await this.modalController.create({
            component: UpdatePhonePage
        });
        return await modal.present();
    }

    async updateEmailModal() {
        if (!this.user.phone) {
            this.toastService.presentToast('if you want to change email please verify your phone number first! ', 2000).then(r => {
            });
            return;
        }

        // user already have a phone number ,the phone number of this user must have been verified
        console.log(this.userService.user);
        // hack

        const modal = await this.modalController.create({
            component: UpdateEmailPage
        });
        return await modal.present();
    }

    async updatePasswordModal() {
        if (!this.user.phone) {
            this.toastService.presentToast('if you want to change password please verify your phone number first! ', 2000).then(r => {
            });
            return;
        }

        const modal = await this.modalController.create({
            component: UpdatePasswordPage
        });
        return await modal.present();
    }

    async updateNameModal() {

        const modal = await this.modalController.create({
            component: UpdateNamePage
        });
        return await modal.present();
    }


    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select Image source',
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.imageService.getImageFromLibrary().then(
                        (imageData) => {
                            // convert base64 to base64Url
                            const base64Image = 'data:image/jpeg;base64,' + imageData;
                            // const base64Image =  imageData;
                            const storageRef = firebase.storage().ref('static/photo/' + this.userService.user.firebaseUid + '.jpg');
                            this.presentLoading();
                            storageRef.putString(base64Image, 'data_url').then(snapshot => {
                                console.log('upload successful');
                                // get a url of uploaded img just now
                                storageRef.getDownloadURL().then(url => {
                                    // loading end
                                    this.loadingDismiss();
                                    this.afAuth.auth.currentUser.updateProfile({
                                        displayName: this.afAuth.auth.currentUser.displayName,
                                        photoURL: url
                                    }).then(res => {
                                            const user = new User();
                                            user.photoUrl = url;
                                            this.userService.updateUser(user);
                                        }
                                    );
                                });
                            }).catch(err => {
                                this.toastService.presentToast('upload failed! ', 2000).then(r => {
                                });
                            });


                        }
                    );

                }
            },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.imageService.getImageFromCamera().then(
                            (imageData) => {
                                const base64Image = 'data:image/jpeg;base64,' + imageData;
                                // const base64Image =  imageData;
                                const storageRef = firebase.storage().ref('static/photo' + this.userService.user.firebaseUid);
                                this.presentLoading();
                                storageRef.putString(base64Image, 'data_url').then(snapshot => {
                                    console.log('upload successful');
                                    console.log(snapshot);
                                    this.loadingDismiss();
                                    storageRef.getDownloadURL().then(url => {
                                        this.afAuth.auth.currentUser.updateProfile({
                                            displayName: this.afAuth.auth.currentUser.displayName,
                                            photoURL: url
                                        }).then(res => {
                                                const user = new User();
                                                user.photoUrl = url;
                                                this.userService.updateUser(user);
                                            }
                                        );
                                    });
                                }).catch(err => {
                                    this.toastService.presentToast('upload failed! ', 2000).then(r => {
                                    });
                                });

                            }
                        );
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Please wait...',
            duration: 2000
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();
        console.log('Loading dismissed!');
    }

    loadingDismiss() {
        this.loadingController.dismiss('test').then(() => {
        });
    }


    ngOnInit(): void {
        if (this.userService.emailVerified === true) {
            this.email_verified = 'verified';
        } else {
            this.email_verified = 'unverified';
        }
    }

    edit(field: string) {
        this.router.navigate(['/edit', field]).then(() => {
        });
    }

    jump(path: string) {
        this.router.navigate([path]).then(() => {
        });
    }

    vendor() {
        if (this.userService.isVendor !== true) {
            console.log();
            this.jump('/vendor-registration');
        } else {
            this.toastService.presentToast('You are already a Vendor', 3000).then(r => {
                this.jump('dashboard');
            });
        }
    }
}
