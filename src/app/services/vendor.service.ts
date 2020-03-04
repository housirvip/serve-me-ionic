import {Injectable} from '@angular/core';
import {Address} from '../classes/address';
import {BaseResponse} from '../core/base-response';
import {HttpClient} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {Vendor} from '../classes/vendor';
import {VendorRequest} from '../classes/spec/vendor-request';
import {User} from '../classes/user';
import {UserService} from './user.service';
import {Order} from '../classes/order';

@Injectable({
    providedIn: 'root'
})
export class VendorService {
    get vendors(): Vendor[] {
        return this._vendors;
    }

    // tslint:disable-next-line:variable-name
    private _vendors: Vendor[];

    constructor(private http: HttpClient,
                private userService: UserService,
                private loadingService: LoadingService) {
    }

    getVendors(request: VendorRequest) {
        this.loadingService.present().then(r => {
        });
        this.http.get<BaseResponse>('order/bids', {
            params: request.toParam()
        }).subscribe(res => {
            console.log(res.result);
            this.loadingService.dismiss().then(r => {
            });
            if (res.code !== 0) {
                return;
            }
            this._vendors = res.result;
        });
    }

    newVendors(vendor: Vendor) {
        this.http.put<BaseResponse>('user/vendor', vendor).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this.userService.getUser();
            });
    }



}
