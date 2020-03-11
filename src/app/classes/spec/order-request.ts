import {OrderStatus} from '../order-status';
import {VendorCategory} from '../vendor-category';
import {HttpParams} from '@angular/common/http';
import {ParamsHelper} from './params-helper';

export class OrderRequest {
    /*
    * this.orderRequest['_start'] = 1; page number
    * this.orderRequest['_limit'] = 1; page size
    * this.orderRequest['_sort'] = 'price:desc,rate:desc'; for sort, support multiple sort
    * this.orderRequest['address.city'] = 'asd'; // deep filter
    * this.orderRequest['address.state'] = 'asd'; // deep filter
    * this.orderRequest.vendor = 1; vendor.id
    * this.orderRequest.user = 1; user.id
    * this.orderRequest.titleContains = 'asd'; for search
     */

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
    status: OrderStatus;
    statusIn: OrderStatus[];
    categoryIn: VendorCategory[];

    toParam(): HttpParams {
        return ParamsHelper.toParam(this);
    }
}
