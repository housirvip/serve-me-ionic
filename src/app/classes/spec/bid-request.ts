import {HttpParams} from '@angular/common/http';
import {ParamsHelper} from './params-helper';

export class BidRequest {
    /*
    * this.bidRequest['_start'] = 1; page number
    * this.bidRequest['_limit'] = 1; page size
    * this.bidRequest['_sort'] = 'price:desc,rate:desc'; for sort, support multiple sort
    * this.bidRequest.vendor = 1; vendor.id
    * this.bidRequest.order = 1; order.id
     */

    // this vendor means vendor.id
    vendor: number;
    order: number;
    priceGte: number;
    priceLte: number;

    toParam(): HttpParams {
        return ParamsHelper.toParam(this);
    }
}
