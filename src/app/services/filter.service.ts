import {Injectable} from '@angular/core';
import {vendorgender, vendortype} from '../classes/vendor';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private httpClient: HttpClient) {
    this._typeFilled = false;
  }


  // tslint:disable-next-line:variable-name
  public _typeFilled: boolean;
  // tslint:disable-next-line:variable-name
  private _gender: vendorgender;
  // tslint:disable-next-line:variable-name
  private _type: vendortype;

  set gender(value: vendorgender) {
    this._gender = value;
  }
  set type(value: vendortype) {
    this._type = value;
  }


  displayGender() {
    switch (this._gender) {
      case vendorgender.female: return 'female';
      case vendorgender.male: return 'male';
    }
    return 'nothing';
  }

  displayType() {
    switch (this._type) {
      case vendortype.Cleaner: return 'cleaner';
      case vendortype.Painter: return 'Painter';
      case vendortype.DogWalker: return 'DogWalker';
      case vendortype.ElectricalWork: return 'ElectricalWork';
    }
  }




}
