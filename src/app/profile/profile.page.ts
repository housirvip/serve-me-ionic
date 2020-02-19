import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService } from "../services/user.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { TypePage } from "../dashboard/type/type.page";
import { UpdatePhonePage } from "./update-phone/update-phone.page";
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { FirebaseStorage } from "@angular/fire";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  // example values. Acutal values should be retrieved from db
  // tslint:disable-next-line:variable-name
  user_points = "0000";
  // tslint:disable-next-line:variable-name
  user_name = "Name";
  // tslint:disable-next-line:variable-name
  user_phone = "Phone";
  // tslint:disable-next-line:variable-name
  user_email = "Email";
  // tslint:disable-next-line:variable-name
  user_password = "****";
  // tslint:disable-next-line:variable-name
  email_verified: any;
  cloudStorage: FirebaseStorage;
  file: File;

  constructor(
    private afAuth: AngularFireAuth,
    private modalController: ModalController,
    private userService: UserService,
    private router: Router,
    private store: AngularFireStorage
  ) {
    this.cloudStorage = store.storage.app.storage();
  }

  get user() {
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

  ngOnInit(): void {
    console.log(this.user);
    console.log(this.userService.emailVerified);

    if (this.afAuth.auth.currentUser.emailVerified) {
      this.email_verified = "verified";
    } else {
      this.email_verified = "unverified";
    }
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
    console.log("uploadProfileImage");
    let fileRef = this.cloudStorage.ref(
      "profile-images/" + this.afAuth.auth.currentUser.uid + ".jpg"
    );
    fileRef.put(this.file);
    console.log("Uploaded a blob or file!");
  }

  edit(field: string) {
    this.router.navigate(["/edit", field]);
  }
}
