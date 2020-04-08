import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Order} from '../../../classes/order';
import {Address} from '../../../classes/address';
import {AddressService} from '../../../services/address.service';
import {UpdateaddressPage} from '../../../address/updateaddress/updateaddress.page';
import {ShowAddressPage} from '../../../new-request/show-address/show-address.page';
import {AlertController, ModalController} from '@ionic/angular';
import {DatetimeService} from '../../../services/datetime.service';
import {OrderService} from '../../../services/order.service';
import {LoadingService} from '../../../services/loading.service';
import {Location} from '@angular/common';
import {ToastService} from '../../../services/toast.service';
import {VendorCategory} from '../../../classes/vendor-category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-biding-edit',
  templateUrl: './biding-edit.page.html',
  styleUrls: ['./biding-edit.page.scss'],
})
export class BidingEditPage implements OnInit {

  tmpOrder: Order;
  selectedAddress: Address;
  vendorCategory: string[];
  availableHours: string;
  minDate: string;
  dateSelected: boolean;
  // tslint:disable-next-line:variable-name
  cur_title = '';
  // tslint:disable-next-line:variable-name
  cur_description = '';
  // tslint:disable-next-line:variable-name
  cur_category = '';
  // tslint:disable-next-line:variable-name
  cur_time = '2020-03-10T06:00:00.000Z';
  // tslint:disable-next-line:variable-name
  cur_address = '';


  requestForm = this.formBuilder.group({
    description: ['', [Validators.required, Validators.maxLength(100)]],
    title: ['', [Validators.required, Validators.maxLength(30)]],
    time: ['', [Validators.required, Validators.maxLength(100)]],
    category: ['', [Validators.required, Validators.maxLength(50)]],
    address: ['', ]
  });


  constructor(
      private modalController: ModalController,
      private formBuilder: FormBuilder,
      private router: Router,
      private addressService: AddressService,
      private datetimeService: DatetimeService,
      private  orderService: OrderService,
      private  loadingService: LoadingService,
      private  location: Location,
      private alertController: AlertController,
      private toastService: ToastService
  ) {
    this.tmpOrder = new Order();
    this.vendorCategory = [];
    this.availableHours = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23';
    this.minDate = this.datetimeService.getDatestring();
    // this.currentOrder.time = new Date();
    this.dateSelected = false;
    // tslint:disable-next-line:forin
    for (const type in VendorCategory) {
      this.vendorCategory.push(type);
    }
  }
  get currentOrder() {
    console.log(this.orderService.currentOrder);
    return this.orderService.currentOrder;
  }

  ngOnInit() {

  }

  refreshAvailableTime() {
    const currentDate = new Date(this.tmpOrder.time);
    this.availableHours = this.datetimeService.getTimeString(currentDate);
    this.dateSelected = true;
    return this.availableHours;
  }

  async openShowAddress() {
    if (!this.addressService.addresses.length) {
      const newAddressModel = await this.modalController.create({
        component: UpdateaddressPage
      });
      newAddressModel.onDidDismiss().then((data) => {
        if (data.data.address.name) {
          console.log('current address');
          console.log(this.addressService.currentAddress);
          this.selectedAddress = this.addressService.currentAddress;
        }
      });
      return await newAddressModel.present();
    } else {
      const modal = await this.modalController.create({
        component: ShowAddressPage,
        cssClass: 'my-custom-modal-css'
      });
      modal.onDidDismiss().then((data: any) => {
        this.selectedAddress = data.data ? data.data.address  :  this.selectedAddress;
        console.log(this.selectedAddress);
      });
      return await modal.present();
    }
  }
  jump(path: string) {
    this.router.navigate([path]).then(() => {
    });
  }

  saved() {
    if (!this.selectedAddress) {
      this.tmpOrder.address = this.selectedAddress;
    }
    this.loadingService.present();
    this.tmpOrder.id = this.currentOrder.id;
    this.orderService.updateOrder(this.tmpOrder);
    console.log(this.tmpOrder);
    this.jump('/orders');
  }
}
