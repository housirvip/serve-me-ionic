import { Component, OnInit } from "@angular/core";
import { ToastService } from "../../../services/toast.service";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-bid-popover",
  templateUrl: "./bid-popover.component.html",
  styleUrls: ["./bid-popover.component.scss"]
})
export class BidPopoverComponent implements OnInit {
  bid_amount: number;
  bid_message: string;

  constructor(
    private toastService: ToastService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  onFormSubmit() {
    if (!this.bid_amount) {
      //bid amount wasn't set
      this.toastService.presentToast("Please input a bid ammount", 1000);
    } else {
      console.log("bid amount: ", this.bid_amount);
      console.log("bid message: ", this.bid_message);

      //Todo: put it in db

      if (!this.bid_message) {
        //message wasn't set. text is undefined! don't put it in DB
      }
      this.dissmissPopover();
    }
  }

  async dissmissPopover() {
    await this.popoverController.dismiss();
  }
}
