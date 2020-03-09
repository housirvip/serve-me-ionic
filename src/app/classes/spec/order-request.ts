import {OrderStatus} from '../order-status';
import {VendorCategory} from '../vendor-category';
import {HttpParams} from '@angular/common/http';
import {ParamsHelper} from './params-helper';

export class OrderRequest {
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

    // this user mean user.id
    user: number;
    // this vendor mean vendor.id
    vendor: number;
    title: string;
    titleContains: string;
    priceGte: number;
    priceLte: number;
    timeGte: Date;
    timeLte: Date;
    statusIn: OrderStatus[];
    categoryIn: VendorCategory[];

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
