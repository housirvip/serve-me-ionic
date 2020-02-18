//import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService } from "../../services/user.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { timingSafeEqual } from "crypto";

@Component({
  selector: "app-edit",
  templateUrl: "edit.page.html",
  styleUrls: ["edit.page.scss"]
})
export class EditPage implements OnInit, OnDestroy {
  input_type = "text";
  button_text = "SAVE";
  edit_msg: string;
  current_value: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.edit_msg = params["field"];
      if (this.edit_msg == "Enter your current password") {
        this.input_type = "password";
        this.button_text = "VERIFY";
      } else if (this.edit_msg == "Enter your new password") {
        this.input_type = "password";
      }

      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClick() {
    if (this.button_text == "VERIFY") {
      /*
       * Verify that current password is correct
       */
      this.router.navigate(["/edit", "Enter your new password"]);
    } else {
      /*
       * save new value
       */
      this.router.navigate(["/profile"]);
    }
  }
}
