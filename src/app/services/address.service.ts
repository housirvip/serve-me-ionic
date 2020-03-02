import { Injectable } from '@angular/core';
import {Address} from '../classes/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  get currentAddressList(): Address[] {
    return this._currentAddressList;
  }
  // tslint:disable-next-line:variable-name
  private _currentAddressList: Address[];
r() { }


  getAddress(uid: string) {
    this._currentAddressList = [{
      id: 1,
    address2: '930benge drive',
    state: 'TX',
    city: 'Arlington',
    username: 'Jiaming Pan',
    phone: '6822345804',
    zipCode: 76013,
    uid: 'lpfsdfewrweadfdf',
    },
      {
        id: 2,
        address2: '930benge drive',
        state: 'TX',
        city: 'Arlington',
        username: 'Jiaming Pan',
        phone: '6822345804',
        zipCode: 76013,
        uid: 'lpfsdfewrweadfdf',
      }
    ];
  }
  addAddress() {

  }
  deleteAddress() {

  }
  updateAddress() {

  }
  getCurrentAddressFromGoogleMap() {
    return Address;
  }
  verifyState(state: string) {
    return false;
  }
  verifyCity(state: string) {
    return false;
  }
}
