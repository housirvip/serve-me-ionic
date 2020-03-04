import {VendorCategory} from '../vendor-category';
import {HttpParams} from '@angular/common/http';

export class VendorRequest {
    name: string;
    rateMin: number;
    rateMax: number;
    priceMin: number;
    priceMax: number;
    categories: VendorCategory[];
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
