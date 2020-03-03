import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../services/address.service';
import {Address} from '../../classes/address';
import {ModalController} from '@ionic/angular';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-show-address',
  templateUrl: './show-address.page.html',
  styleUrls: ['./show-address.page.scss'],
})
export class ShowAddressPage implements OnInit {
  get AddresList() {
    return this.addressService.addresses;
  }

  constructor(private addressService: AddressService,
              private modalController: ModalController,
              private  userService: UserService) { }
  selectedAddress: Address;
  ngOnInit() {
    this.userService.user ? this.addressService.getAddresses() :
        console.log('error no user,please enter this page again');
  }


  selected(selectedAddress) {
      this.selectedAddress = selectedAddress;
      this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      address: this.selectedAddress
    }).then(() => {
    });
  }


}
