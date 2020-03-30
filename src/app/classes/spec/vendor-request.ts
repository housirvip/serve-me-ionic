import {VendorCategory} from '../vendor-category';
import {HttpParams} from '@angular/common/http';
import {ParamsHelper} from './params-helper';

export class VendorRequest {
    /*
    * this.vendorRequest['_start'] = 1; page number
    * this.vendorRequest['_limit'] = 1; page size
    * this.vendorRequest['_sort'] = 'price:desc,rate:desc'; for sort, support multiple sort
    * this.vendorRequest['address.city'] = 'asd'; // deep filter
    * this.vendorRequest['address.state'] = 'asd'; // deep filter
    * this.vendorRequest.nameContains = 'hou'; for search
     */

    name: string;
    nameContains: string;
    // rate less than
    rateLte: number;
    // rate greater than
    rateGte: number;
    priceGte: number;
    priceLte: number;
    categoriesContains: VendorCategory[];

    toParam(): HttpParams {
        return ParamsHelper.toParam(this);
    }
}
