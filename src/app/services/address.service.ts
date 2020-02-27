import { Injectable } from '@angular/core';
import {Address} from '../classes/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  // tslint:disable-next-line:variable-name
  private _currentAddressList: Address[];

  set currentAddressList(value: Address[]) {
    this._currentAddressList = value;
  }
  get currentAddressList(): Address[] {
    return this._currentAddressList;
  }



  getAddress() {

  }
  addAddress() {

  }
  deleteAddress() {

  }
  updateAddress() {

  }
  verifyState(state: string) {
  }
  verifyCity(state: string) {
  }
}
