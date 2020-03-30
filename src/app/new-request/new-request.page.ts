import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';
import {UpdateaddressPage} from '../address/updateaddress/updateaddress.page';
import {ShowAddressPage} from './show-address/show-address.page';
import {AddressService} from '../services/address.service';
import {VendorCategory} from '../classes/vendor-category';
import {Order} from '../classes/order';
import {OrderService} from '../services/order.service';
import {Address} from '../classes/address';
import {LoadingService} from '../services/loading.service';
import {DatetimeService} from '../services/datetime.service';
import {OrderStatus} from '../classes/order-status';
import {ToastService} from '../services/toast.service';


@Component({
  selector: "app-new-request",
  templateUrl: "./new-request.page.html",
  styleUrls: ["./new-request.page.scss"]
})
export class NewRequestPage implements OnInit {
    currentOrder: Order;
    selectedAddress: Address;
    vendorCategory: string[];
    availableHours: string;
    minDate: string;
    dateSelected: boolean;

    requestForm = this.formBuilder.group({
        description: ['', [Validators.required, Validators.maxLength(100)]],
        title: ['', [Validators.required, Validators.maxLength(30)]],
        time: ['', [Validators.required, Validators.maxLength(100)]],
        category: ['', [Validators.required, Validators.maxLength(50)]],
        address: ['', ]

  requestForm = this.formBuilder.group({
    description: ["", [Validators.required, Validators.maxLength(1000)]],
    title: ["", [Validators.required, Validators.maxLength(30)]],
    time: ["", [Validators.required, Validators.maxLength(100)]],
    category: ["", [Validators.required, Validators.maxLength(50)]],
    address: [""]
  });
  errorMessages = {
    description: [
      { type: "required", message: "Name is required" },
      {
        type: "maxlength",
        message: "name should be shorter than 50 characters"
      }
    ]
  };

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private addressService: AddressService,
                private  orderService: OrderService,
                private  loadingService: LoadingService,
                private  location: Location,
                private  datetimeService: DatetimeService,
                private alertController: AlertController,
                private toastService: ToastService) {
        this.currentOrder = new Order();
        this.vendorCategory = [];
        this.availableHours = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23';
        this.minDate = this.datetimeService.getDatestring();
        this.currentOrder.time = new Date();
        this.dateSelected = false;
        // tslint:disable-next-line:forin
        for (const type in VendorCategory) {
            this.vendorCategory.push(type);
        }
    }
  }

    ngOnInit() {
        this.addressService.getList();
        console.log(this.datetimeService.getDatestring());
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
  }

    saved() {
        // const javatime = this.datePipe.transform(this.isoDate, 'yyyy-MM-dd hh:mm:ss');
        // console.log(javatime);
        // this.currentOrder.time = javatime;
        // console.log(this.selectedAddress);
        // console.log(this.isoDate);
        if (!this.selectedAddress) {
            this.toastService.presentToast('please seletct a address' , 2000);
            return;
        }
        this.currentOrder.address = this.selectedAddress;
        this.loadingService.present();
        this.orderService.createOrder(this.currentOrder).subscribe(
            res => {
                this.loadingService.dismiss();
                this.presentAlert();
                this.location.back();
            }
        );
    }

    refreshAvailableTime() {
        console.log(this.currentOrder.time);
        const currentDate = new Date(this.currentOrder.time);
        this.availableHours = this.datetimeService.getTimeString(currentDate);
        this.dateSelected = true;
    }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "New Request Successful!",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
