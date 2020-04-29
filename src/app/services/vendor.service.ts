import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {Vendor} from '../classes/vendor';
import {VendorRequest} from '../classes/spec/vendor-request';
import {User} from '../classes/user';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class VendorService {

    get vendors(): Vendor[] {
        return this._vendors;
    }

    get vendor(): Vendor {
        return this._currentVendor;
    }

    set vendor(vendor: Vendor) {
        this._currentVendor = vendor;
    }


    // tslint:disable-next-line:variable-name
    private _vendors: Vendor[];
    // tslint:disable-next-line:variable-name
    private _currentVendor: Vendor;
    // tslint:disable-next-line:variable-name
    private _account: number;

    constructor(private http: HttpClient,
                private userService: UserService,
                private loadingService: LoadingService) {
        // this._currentVendor.summary = 0;
    }

    getVendors(request: VendorRequest) {
        this.http.get<Vendor[]>('vendors', {
            params: request.toParam()
        }).subscribe(res => {
            console.log(res);
            this._vendors = res;
        });
    }

    newVendors(vendor: Vendor) {
        this.http.put<User>('vendor/upgrade', vendor).subscribe(
            res => {
                this.userService.getUser(() => {
                }, () => {
                });
            });
    }

    getIncomes(callback) {
        // this._currentVendor.summary = 0;
        this.http.get<any>('order/incomes').subscribe(
            res => {
                callback(res.res);
                this._account = res.res;
                // this._currentVendor.summary = res;
            });
    }
}
