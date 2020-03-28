import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavParams} from '@ionic/angular';
import {Order} from '../../../classes/order';
import {OrderService} from '../../../services/order.service';
import {Bid} from '../../../classes/bid';

@Component({
  selector: 'app-biding-check',
  templateUrl: './biding-check.page.html',
  styleUrls: ['./biding-check.page.scss'],
})
export class BidingCheckPage implements OnInit {
  // tslint:disable-next-line:variable-name
  _order: Order;
  constructor(private modalController: ModalController,
              public navParams: NavParams,
              private orderService: OrderService,
              private alertController: AlertController) {

  }

  ngOnInit() {
    this._order =  this.navParams.get('req');
    console.log(this._order.bids);
  }

  dismiss() {
    this.modalController.dismiss('test').then(() => {
    });
  }

  accept(bid: Bid) {
     const targetOrder = new Order();
     targetOrder.id = this._order.id;
     bid.order = targetOrder;
     this.orderService.accept(bid).subscribe(res => {
          this.presentAlert();
          this.dismiss();
     });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'accept biding success',
      buttons: ['OK']
    });

    await alert.present();
  }

}
