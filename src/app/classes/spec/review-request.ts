import {HttpParams} from '@angular/common/http';
import {ParamsHelper} from './params-helper';

export class ReviewRequest {
    /*
    * this.reviewRequest['_start'] = 1; page number
    * this.reviewRequest['_limit'] = 1; page size
    * this.reviewRequest['_sort'] = 'createTime:desc,rate:desc'; for sort, support multiple sort
    * this.reviewRequest.vendor = 1; vendor.id
    * this.reviewRequest.order = 1; order.id
    * this.reviewRequest.user = 1; user.id
     */

    // this vendor means vendor.id
    vendor: number;
    user: number;
    order: number;
    rateGte: number;
    rateLte: number;
    titleContains: string;

    toParam(): HttpParams {
        return ParamsHelper.toParam(this);
    }
}
