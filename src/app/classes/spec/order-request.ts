import {OrderStatus} from '../order-status';
import {VendorCategory} from '../vendor-category';
import {HttpParams} from '@angular/common/http';

export class OrderRequest {
    title: string;
    priceMin: number;
    priceMax: number;
    timeMin: Date;
    timeMax: Date;
    status: OrderStatus[];
    category: VendorCategory[];
    city: string;
    state: string;
    // from 0 to max, 0 was the first page
    page: number;
    size: number;
    // for example sort=["id,asc","price,desc"]
    sort: string[];

    toParam(): HttpParams {
        const params = new HttpParams();
        Object.entries(this).forEach(
            ([key, value]) => params.set(key, value)
        );
        return params;
    }
}
