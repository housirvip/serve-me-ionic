import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService } from "../services/user.service";
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

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private router: Router
  ) {}

  get user() {
    return this.userService.user;
  }

  edit(field: string) {
    this.router.navigate(["/edit", field]);
  }
}
