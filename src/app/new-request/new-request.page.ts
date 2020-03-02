import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {UpdateaddressPage} from '../address/updateaddress/updateaddress.page';
import {ShowAddressPage} from './show-address/show-address.page';
import {AddressService} from '../services/address.service';
import {VendorCategory} from '../classes/vendor-category';
import {Order} from '../classes/order';
import {OrderService} from '../services/order.service';
import {DatePipe} from '@angular/common';
import {Address} from '../classes/address';


@Component({
    selector: 'app-new-request',
    templateUrl: './new-request.page.html',
    styleUrls: ['./new-request.page.scss'],
})

export class NewRequestPage implements OnInit {
    currentOrder: Order;
    isoDate: Date;
    private selectedAddress: Address;

    get WorkTypeList() {
        const ret = [];
        // tslint:disable-next-line:forin
        for (const type in VendorCategory) {
            ret.push(type);
        }
        return ret;
    }

    requestForm = this.formBuilder.group({
        description: ['', [Validators.required, Validators.maxLength(10)]],
        title: ['', [Validators.required, Validators.maxLength(50)]],
        time: ['', [Validators.required, Validators.maxLength(50)]],
        category: ['', [Validators.required, Validators.maxLength(50)]],
        address: ['']

    });
    public errorMessages = {
        discription: [
            {type: 'required', message: 'Name is required'},
            {type: 'maxlength', message: 'name should be shoter than 50 characters'}
        ]
    };


    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private addressService: AddressService,
                private  orderService: OrderService,
                private  datePipe: DatePipe) {
        this.currentOrder = new Order();
        this.isoDate = new Date();
    }

    ngOnInit() {
      this.addressService.getAddresses();
    }


    async openShowaddress() {
        if (!this.addressService.addresses.length) {
            const newAddressModel = await this.modalController.create({
                component: UpdateaddressPage
            });
            newAddressModel.onDidDismiss().then((data) => {
                console.log('dissmisss');
                console.log(data);
            });
            return await newAddressModel.present();
        } else {
            const modal = await this.modalController.create({
                component: ShowAddressPage,
                cssClass: 'my-custom-modal-css'
            });
            // @ts-ignore
            modal.onDidDismiss().then((data: any) => {
                this.selectedAddress = data ? data.data.address : null;
            });
            return await modal.present();
        }
    }

    saved() {
        const javatime = this.datePipe.transform(this.isoDate, 'yyyy-MM-dd hh:mm:ss');
        console.log(javatime);
        this.currentOrder.time = javatime;
        console.log(this.selectedAddress);
        this.currentOrder.address = this.selectedAddress;
        this.orderService.createOrder(this.currentOrder);
    }
}
