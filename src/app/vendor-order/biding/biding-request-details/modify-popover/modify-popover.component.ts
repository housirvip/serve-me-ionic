import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ToastService } from '../../../../services/toast.service';
import { OrderService } from '../../../../services/order.service';
import { Order } from '../../../../classes/order';
import { Bid } from '../../../../classes/bid';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-modify-popover',
  templateUrl: './modify-popover.component.html',
  styleUrls: ['./modify-popover.component.scss'],
})
export class ModifyPopoverComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  bid_amount: number;
  // tslint:disable-next-line:variable-name
  bid_message: string;
  order: Order;
  // tslint:disable-next-line:variable-name
  current_bid: Bid;

  constructor(
    private orderService: OrderService,
    private toastService: ToastService,
    private userService: UserService,
    private popoverController: PopoverController,
    private navParams: NavParams
  ) {
    this.order = this.navParams.get('order');
    this.current_bid = this.navParams.get('bid');
  }

  ngOnInit() {
    console.log('Order details:');
    console.log('Title: ', this.order.title);
    console.log('Description: ', this.order.description);
  }

  onFormSubmit() {
    // call api to update bid.
    // currently the place bid api call doesn't check if vendor already has a bid for a request.
    // meaning if I place a bid twice on a request I have 2 bids and it shows the request twice in my order page.
    // That needs to be fixed so the api backend checks if the provider has placed a previous bid. If so,
    // edit that bid instead of placing another one. This way we can call the same place bid api function here to modify it
    // -------------
    if (!this.bid_amount) {
      // bid amount wasn't set
      this.toastService.presentToast('Please input a bid ammount', 1000);
    } else {
      console.log('bid amount: ', this.bid_amount);
      console.log('bid message: ', this.bid_message);
      console.log('Trying to update this bid: ', this.current_bid);
      console.log(this.userService);

      this.current_bid.price = this.bid_amount;
      this.current_bid.description = this.bid_message;
      console.log('With this new bid: ', this.current_bid);
      this.orderService.updateBid(this.current_bid);
      this.dissmissPopover().then((r) => {});
      this.toastService
        .presentToast('Bid modified successfully!', 1000)
        .then((r) => {});
    }
  }

  async dissmissPopover() {
    await this.popoverController.dismiss(this.bid_amount);
  }
}
