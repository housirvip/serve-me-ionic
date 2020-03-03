// // import { Component } from "@angular/core";
// import {ModalController} from '@ionic/angular';
// import {UserService} from '../../services/user.service';
// import {ToastService} from '../../services/toast.service';
// import {AngularFireAuth} from '@angular/fire/auth';
// import {Component, OnInit, OnDestroy} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import {Router} from '@angular/router';
// import {User} from '../../classes/user';
//
// @Component({
//     selector: 'app-edit',
//     templateUrl: 'edit.page.html',
//     styleUrls: ['edit.page.scss']
// })
// export class EditPage implements OnInit, OnDestroy {
//     // tslint:disable-next-line:variable-name
//     input_type = 'text';
//     // tslint:disable-next-line:variable-name
//     button_text = 'SAVE';
//     // tslint:disable-next-line:variable-name
//     edit_msg: string;
//     // tslint:disable-next-line:variable-name
//     current_value: string;
//     private sub: any;
//
//     constructor(
//         private afAuth: AngularFireAuth,
//         private route: ActivatedRoute,
//         private userService: UserService,
//         private toastService: ToastService,
//         private router: Router
//     ) {
//     }
//
//     ngOnInit() {
//         this.sub = this.route.params.subscribe(params => {
//             this.edit_msg = params.field;
//             if (this.edit_msg === 'Enter your current password') {
//                 this.input_type = 'password';
//                 this.button_text = 'VERIFY';
//             } else if (this.edit_msg === 'Enter your new password') {
//                 this.input_type = 'password';
//             } else if (this.edit_msg === 'Email') {
//                 this.input_type = 'password';
//                 this.button_text = 'VERIFY';
//                 this.edit_msg = 'Enter your password';
//             } else if (this.edit_msg === 'Enter your new email') {
//                 this.input_type = 'email';
//             }
//         });
//     }
//
//     ngOnDestroy() {
//         this.sub.unsubscribe();
//     }
//
//     onClick(user_input: any) {
//         if (this.button_text === 'VERIFY') {
//             //--------Asking to verify password------------
//             if (this.edit_msg === 'Enter your password') {
//                 //--------needed for email--------------
//                 this.afAuth.auth
//                     .signInWithEmailAndPassword(
//                         this.afAuth.auth.currentUser.email,
//                         user_input
//                     ) //re-authenticate
//                     .then(res => {
//                         console.log('Password successful!');
//                         this.router.navigate(['/edit', 'Enter your new email']); //ask for new email
//                     })
//                     .catch(error => {
//                         console.log('Error reathenticating');
//                         console.log(error);
//                     });
//             } else if (this.edit_msg === 'Enter your current password') {
//                 //--------needed for password-----------
//                 this.afAuth.auth
//                     .signInWithEmailAndPassword(
//                         this.afAuth.auth.currentUser.email,
//                         user_input
//                     ) //reauthenticate
//                     .then(res => {
//                         console.log('Password successful!');
//                         this.router.navigate(['/edit', 'Enter your new password']); //ask for new password
//                     })
//                     .catch(error => {
//                         console.log('Error reathenticating');
//                         console.log(error);
//                     });
//             }
//         } else {
//             //-------no need to verify----------
//             if (this.edit_msg === 'Name') {
//                 if (this.userService.user.username !== user_input) {
//                     //if input is different than the current one. Will bug if can't fix updating local user info.
//                     this.afAuth.auth.currentUser
//                         .updateProfile({
//                             displayName: user_input
//                         })
//                         .then(res => {
//                             //this.afAuth.auth.currentUser.reload();
//
//                             const user = new User();
//                             user.username = user_input;
//                             console.log(user);
//                             this.userService.updateUser(user).then(r => {
//                                 console.log(r);
//                             });
//                             this.toastService.presentToast('Update Successfull!', 2000);
//                             console.log('Success! New name:');
//                             console.log(this.afAuth.auth.currentUser.displayName);
//                         })
//                         .catch(error => {
//                             console.log('Error updating name!');
//                             console.log(error);
//                         });
//                 }
//             } else if (this.edit_msg === 'Enter your new email') {
//                 this.afAuth.auth.currentUser
//                     .updateEmail(user_input)
//                     .then(res => {
//                         //this.afAuth.auth.currentUser.reload();
//                         this.toastService.presentToast('Update Successfull!', 2000);
//                         console.log('Email changed successful! New email: ');
//                         console.log(this.afAuth.auth.currentUser.email);
//                         this.afAuth.auth.currentUser.sendEmailVerification();
//                     })
//                     .catch(error => {
//                         console.log('Error updating email');
//                         console.log(error);
//                     });
//             } else if (this.edit_msg === 'Enter your new password') {
//                 console.log('MAde it!!');
//                 this.afAuth.auth.currentUser
//                     .updatePassword(user_input)
//                     .then(res => {
//                         //this.afAuth.auth.currentUser.reload();
//                         this.toastService.presentToast('Update Successfull!', 2000);
//                         console.log('Password change successfull!');
//                     })
//                     .catch(error => {
//                         console.log('Error updating email');
//                         console.log(error);
//                     });
//             }
//             //done, so back to profile
//             this.router.navigate(['/profile']);
//         }
//     }
// }
