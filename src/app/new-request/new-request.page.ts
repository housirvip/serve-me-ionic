import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {UpdateaddressPage} from '../address/updateaddress/updateaddress.page';
import {ShowAddressPage} from './show-address/show-address.page';
import {AddressService} from '../services/address.service';
import {VendorCategory} from '../classes/vendor-category';
import {Order} from '../classes/order';
import {OrderService} from '../services/order.service';
import {Address} from '../classes/address';


@Component({
    selector: 'app-new-request',
    templateUrl: './new-request.page.html',
    styleUrls: ['./new-request.page.scss'],
})

export class NewRequestPage implements OnInit {
    currentOrder: Order;
    selectedAddress: Address;
    vendorCategory: string[];

    requestForm = this.formBuilder.group({
        description: ['', [Validators.required, Validators.maxLength(10)]],
        title: ['', [Validators.required, Validators.maxLength(50)]],
        time: ['', [Validators.required, Validators.maxLength(50)]],
        category: ['', [Validators.required, Validators.maxLength(50)]],
        address: ['']

    });
    errorMessages = {
        description: [
            {type: 'required', message: 'Name is required'},
            {type: 'maxlength', message: 'name should be shorter than 50 characters'}
        ]
    };

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private addressService: AddressService,
                private  orderService: OrderService) {
        this.currentOrder = new Order();
        this.vendorCategory = [];
        // tslint:disable-next-line:forin
        for (const type in VendorCategory) {
            this.vendorCategory.push(type);
        }
    }

    ngOnInit() {
        this.addressService.getAddresses();
    }

    async openShowAddress() {
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
            modal.onDidDismiss().then((data: any) => {
                this.selectedAddress = data ? data.data.address : null;
            });
            return await modal.present();
        }
    }

    saved() {
        // const javatime = this.datePipe.transform(this.isoDate, 'yyyy-MM-dd hh:mm:ss');
        // console.log(javatime);
        // this.currentOrder.time = javatime;
        // console.log(this.selectedAddress);
        // console.log(this.isoDate);
        this.currentOrder.address = this.selectedAddress;
        this.orderService.createOrder(this.currentOrder);
    }
}
