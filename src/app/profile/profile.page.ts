import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {TypePage} from '../dashboard/type/type.page';
import {UpdatePhonePage} from './update-phone/update-phone.page';
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage {
  //example values. Acutal values should be retrieved from db
  user_points = "4500";
  user_name = "Javier";
  user_phone = "214-374-9439";
  user_email = "javieralexcastro95@gmail.com";
  user_password = "****";
  user_verified = "verified";
export class ProfilePage implements  OnInit {

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private router: Router
  ) {}

    get user() {
        return this.userService.user;
    }

    async updatePhonemModal() {
        const modal = await this.modalController.create({
            component: UpdatePhonePage
        });
        return await modal.present();
    }

    ngOnInit(): void {
        console.log(this.userService.user);
    }


  edit(field: string) {
    this.router.navigate(["/edit", field]);
  }
}
