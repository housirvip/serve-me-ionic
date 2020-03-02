import {Component, OnInit} from '@angular/core';
import {AddressService} from '../services/address.service';
import {Address} from '../classes/address';
import {UserService} from '../services/user.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {UpdateNamePage} from '../profile/update-name/update-name.page';
import {ModalController} from '@ionic/angular';
import {UpdateaddressPage} from './updateaddress/updateaddress.page';

@Component({
    selector: 'app-address',
    templateUrl: './address.page.html',
    styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

    get AddressList() {
        return this.addressService.addresses;
    }

    constructor(private addressService: AddressService,
                private userService: UserService,
                private afAuth: AngularFireAuth,
                private  modalController: ModalController) {
    }

    ngOnInit() {
        this.userService.user ? this.addressService.getAddresses() : console.log('error no user,please enter this page again');
    }

    async updateAddress() {
        const modal = await this.modalController.create({
            component: UpdateaddressPage
        });
        modal.onDidDismiss().then((data) => {
            console.log('dissmisss');
            console.log(data);
        });
        return await modal.present();
    }
}
