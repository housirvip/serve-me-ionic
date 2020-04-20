import { Component, OnInit } from "@angular/core";
import { AlertController, PopoverController } from "@ionic/angular";
import { OrderService } from "../../services/order.service";
import { DatetimeService } from "../../services/datetime.service";
import { ToastService } from "../../services/toast.service";
import { Order } from "../../classes/order";
import { ReviewPopoverComponent } from "./review-popover/review-popover.component";

@Component({
  selector: "app-progressing",
  templateUrl: "./progressing.component.html",
  styleUrls: ["./progressing.component.scss"],
})
export class ProgressingComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  toast_msg: string;
  constructor(
    private orderService: OrderService,
    public datetimeService: DatetimeService,
    private toastService: ToastService,
    private alertController: AlertController,
    private popoverController: PopoverController
  ) {}

  get orders() {
    return this.orderService.orders;
  }

  ngOnInit() {}

  confirmFinished(order: Order) {
    this.presentAlert(order); // show alert asking user if they want to review vendor
  }

  async presentAlert(order: Order) {
    const alert = await this.alertController.create({
      header: 'Review',
      message:
        'Would you like to leave a review for ' + order.vendor.name + '?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Wants to leave a review');
            this.onYesReviewPressed(order);
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Does NOT want to leave a review');
            this.toast_msg = 'Order marked as Completed';
            this.orderService.complete(order, (res) => {
              this.toastService.presentToast(this.toast_msg, 2000);
            });
          },
        },
      ],
    });

    await alert.present();
  }

  async onYesReviewPressed(order: Order) {
    const popover = await this.popoverController.create({
      component: ReviewPopoverComponent,
      backdropDismiss: true,
      componentProps: { order: order },
    });
    await popover.present();
    // once popup is dismissed get the data back
    popover.onWillDismiss().then((result) => {
      console.log(result.data);
      if (result.data) {
        // if a review was passed back by the popup
        order.review = result.data;

        // console.log(order.review);
        this.toast_msg = 'Review submitted. Your order is now Completed';
      } else {
        // popup was opened but was dismissed so no review was submitted
        this.toast_msg = 'Your order is now Completed';
      }
      this.orderService.complete(order, (res) => {
        this.toastService.presentToast(this.toast_msg, 2000);
      });
    });
    return;
  }
}
