import {Injectable} from '@angular/core';
import {vendorgender, vendortype, VendorResult} from '../classes/vendor';
import {HttpClient} from '@angular/common/http';

const MAXPRICE_LIMT = 2000;
const MINPRICE_LIMT = 0;

@Injectable({
  providedIn: 'root'
})


export class FilterService {


  constructor(private httpClient: HttpClient) {
    this._typeFilled = false;
    this._priceFilled = false;
    this._gender = vendorgender.whatever;
    this._type = vendortype.whatever;
    this._maxPrice = MAXPRICE_LIMT;
    this._minPrice = MINPRICE_LIMT ;
  }

  // tslint:disable-next-line:variable-name
  public _typeFilled: boolean;
  // tslint:disable-next-line:variable-name
  private _gender: vendorgender;
  // tslint:disable-next-line:variable-name
  private _type: vendortype;

  // tslint:disable-next-line:variable-name
  public _priceFilled: boolean;
  // tslint:disable-next-line:variable-name
  private _maxPrice: number;
  // tslint:disable-next-line:variable-name
  private _minPrice: number;



  // the source of data todisplay vendorList on dashboard
  public vendorList: VendorResult[];



  get minPrice(): number {
    return this._minPrice;
  }

  get maxPrice(): number {
    return this._maxPrice;
  }
  set maxPrice(value: number) {
    this._maxPrice = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set minPrice(value: number) {
    this._minPrice = value;
  }

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
      case vendortype.ElectricalWork: return 'Electrical';
    }
  }

  getVendorList() {
    // request for vendors with filter
     this.vendorList = [{
      commentsNum: 3,
      priceString: '30',
      rate: 5,
      titleName: 'Tom',
      typeString: 'Cleaner',
      workHour: '9AM-9PM',
      workday: 'Mon Tues Wed Thurs Fri Sat Sun',
       photoUrl: '../../assets/img/avatar.png'
    }, {
        commentsNum: 3,
        priceString: '23',
        rate: 5,
        titleName: 'James',
        typeString: 'Dog Walker',
        workHour: '9AM-9PM',
        workday: 'Mon Tues Wed Thurs Fri Sat Sun',
       photoUrl: '../../assets/img/avatar.png'
      }, {
      commentsNum: 3,
      priceString: '15',
      rate: 5,
      titleName: 'Jack',
      typeString: 'Cleaner',
      workHour: '9AM-9PM',
      workday: 'Mon Tues Wed Thurs Fri Sat Sun',
       photoUrl: '../../assets/img/avatar.png'
    }];
  }







}
