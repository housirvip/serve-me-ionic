import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VendorCategory} from '../classes/vendor-category';
import {VendorResult} from '../classes/vendor-result';
import {VendorGender} from '../classes/vendor-gender';

const MAX_PRICE_LIMIT = 2000;
const MIN_PRICE_LIMIT = 0;

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    constructor(private httpClient: HttpClient) {
        this._typeFilled = false;
        this._priceFilled = false;
        this._maxPrice = MAX_PRICE_LIMIT;
        this._minPrice = MIN_PRICE_LIMIT;
    }

    // tslint:disable-next-line:variable-name
    public _typeFilled: boolean;
    // tslint:disable-next-line:variable-name
    private _gender: VendorGender;
    // tslint:disable-next-line:variable-name
    private _type: VendorCategory;

    // tslint:disable-next-line:variable-name
    public _priceFilled: boolean;
    // tslint:disable-next-line:variable-name
    private _maxPrice: number;
    // tslint:disable-next-line:variable-name
    private _minPrice: number;
    // the source of data to display vendorList on dashboard
    public vendorList: VendorResult[];

    get minPrice(): number {
        return this._minPrice;
    }

    set minPrice(value: number) {
        this._minPrice = value;
    }

    get maxPrice(): number {
        return this._maxPrice;
    }

    set maxPrice(value: number) {
        this._maxPrice = value;
    }

    set gender(value: VendorGender) {
        this._gender = value;
    }

    set type(value: VendorCategory) {
        this._type = value;
    }

    displayGender() {
        switch (this._gender) {
            case VendorGender.female:
                return 'female';
            case VendorGender.male:
                return 'male';
        }
        return 'nothing';
    }

    displayType() {
        switch (this._type) {
            case VendorCategory.HomeCleaning:
                return 'HomeCleaning';
            case VendorCategory.HomeRepairAndPainting:
                return 'HomeRepairAndPainting';
            case VendorCategory.PackagingAndMoving:
                return 'PackagingAndMoving';
            case VendorCategory.Electrical:
                return 'Electrical';
        }
    }

    getVendorList() {
        // request for vendors with filter
        return [{
            commentsNum: 3,
            priceString: '30',
            rate: 5,
            titleName: 'Tom',
            typeString: 'HomeCleaning',
            workHour: '9AM-9PM',
            workDay: 'Mon Tues Wed Thurs Fri Sat Sun',
            photoUrl: '../../assets/img/avatar.png'
        }, {
            commentsNum: 3,
            priceString: '23',
            rate: 5,
            titleName: 'James',
            typeString: 'Dog Walker',
            workHour: '9AM-9PM',
            workDay: 'Mon Tues Wed Thurs Fri Sat Sun',
            photoUrl: '../../assets/img/avatar.png'
        }, {
            commentsNum: 3,
            priceString: '15',
            rate: 5,
            titleName: 'Jack',
            typeString: 'HomeCleaning',
            workHour: '9AM-9PM',
            workDay: 'Mon Tues Wed Thurs Fri Sat Sun',
            photoUrl: '../../assets/img/avatar.png'
        }];
    }

}
