import {VendorCategory} from '../vendor-category';
import {HttpParams} from '@angular/common/http';
import {ParamsHelper} from './params-helper';

export class VendorRequest {
    // page size
    set limit(value: number) {
        this._limit = value;
    }

    // page number
    set start(value: number) {
        this._start = value - 1;
    }

    // for example sort="id:asc,price:desc"
    set sort(value: string) {
        this._sort = value;
    }

    name: string;
    nameContains: string;
    // rate less than
    rateLte: number;
    // rate greater than
    rateGte: number;
    priceGte: number;
    priceLte: number;
    categoriesContains: VendorCategory[];

    // tslint:disable-next-line:variable-name
    _limit: number;
    // tslint:disable-next-line:variable-name
    _start: number;
    // tslint:disable-next-line:variable-name
    _sort: string;

    toParam(): HttpParams {
        return ParamsHelper.toParam(this);
    }
}
