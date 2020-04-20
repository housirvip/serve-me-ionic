import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {DatetimeService} from '../../services/datetime.service';
import {ToastService} from '../../services/toast.service';
import {Order} from '../../classes/order';
import {ReviewPopoverEditComponent} from './review-popover-edit/review-popover-edit.component';
import {AlertController, PopoverController} from '@ionic/angular';
import {ReviewService} from '../../services/review.service';
import {Review} from '../../classes/review';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  toast_msg: string;
  currentOrder: Order;
  constructor(private orderService: OrderService,
              private datetimeService: DatetimeService,
              private toastService: ToastService,
              private alertController: AlertController,
              private popoverController: PopoverController,
              private reviewService: ReviewService) {
  }

  get orders() {
    return this.orderService.orders;
  }

  ngOnInit() {
  }

  giveReview(request: Order) {
    this.presentAlert(request); // show alert asking user if they want to review vendor
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
            this.toast_msg = 'Review cancel';
            this.toastService.presentToast(this.toast_msg, 2000);
          },
        },
      ],
    });

    await alert.present();
  }

  async onYesReviewPressed(order: Order) {
    const popover = await this.popoverController.create({
      component: ReviewPopoverEditComponent,
      backdropDismiss: true,
      componentProps: { order: order },
    });
    await popover.present();
    // once popup is dismissed get the data back
    popover.onWillDismiss().then((result) => {
      console.log(result.data);
      if (result.data) {
        // if a review was passed back by the popup
        this.currentOrder = result.data;
        console.log(result.data);
        // this.reviewService.update(this.currentOrder.review);
        this.toast_msg = 'Review submitted.';
      }
      this.toastService.presentToast(this.toast_msg, 2000);
    });
    return;
  }
}
