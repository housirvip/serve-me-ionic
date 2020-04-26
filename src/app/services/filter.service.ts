import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VendorCategory} from '../classes/vendor-category';
import {VendorResult} from '../classes/vendor-result';
import {VendorGender} from '../classes/vendor-gender';
import {VendorRequest} from '../classes/spec/vendor-request';
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

        this.priceOrderFilled = false;
        this.rateOrderFilled = false;
        this.priceDesc = false;
        this.rateDesc = true;

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
    private priceDesc: boolean;
    private rateDesc: boolean;
    public priceOrderFilled: boolean;
    public rateOrderFilled: boolean;
    public vendorList: VendorResult[];
    public queryString: string;

    get pricedesc(): boolean {
        return this.priceDesc;
    }
    get ratedesc(): boolean {
        return this.rateDesc;
    }
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
    // tslint:disable-next-line:adjacent-overload-signatures
    set pricedesc(bool: boolean) {
        this.priceDesc = bool;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    set ratedesc(bool: boolean) {
        this.rateDesc = bool;
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
        return this._type;
    }
    getVendorList() {
        // request for vendors with filter

        console.log(this.vendorList);
        // return this.vendorList;
        return [{
            commentsNum: 3,
            priceString: '30',
            rate: 5,
            name: 'Tom',
            categories: ['HomeCleaning'],
            workHour: '9AM-9PM',
            workDay: 'Mon Tues Wed Thurs Fri Sat Sun',
            photoUrl: '../../assets/img/avatar.png'
        }, {
            commentsNum: 3,
            priceString: '23',
            rate: 5,
            name: 'James',
            categories: ['Dog Walker'],
            workHour: '9AM-9PM',
            workDay: 'Mon Tues Wed Thurs Fri Sat Sun',
            photoUrl: '../../assets/img/avatar.png'
        }, {
            commentsNum: 3,
            priceString: '15',
            rate: 5,
            name: 'Jack',
            categories: ['HomeCleaning'],
            workHour: '9AM-9PM',
            workDay: 'Mon Tues Wed Thurs Fri Sat Sun',
            photoUrl: '../../assets/img/avatar.png'
        }];
    }

    vendorRequestFactory() {
        const request = new VendorRequest();
        if (this._priceFilled) {
            request.priceLte = this.maxPrice;
            request.priceGte = this.minPrice;
        }
        if (this._typeFilled) {
            request.categoriesContains = [];
            request.categoriesContains.push(this._type);
        }
        if (this.priceOrderFilled) {
            request['_sort'] = 'price:' + (this.priceDesc ? 'desc' : 'asc') ;
        }
        if (this.rateOrderFilled) {
            request['_sort'] = 'rate:' + (this.rateDesc ? 'desc' : 'asc');
        }
        request.nameContains = this.queryString;
        return request;
    }

}
