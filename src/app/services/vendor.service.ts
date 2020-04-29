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

    // tslint:disable-next-line:variable-name
    private _vendors: Vendor[];
    // tslint:disable-next-line:variable-name
    private _currentVendor: Vendor;
    // tslint:disable-next-line:variable-name
    private _account: number;

    get vendors(): Vendor[] {
        return this._vendors;
    }

    get vendor(): Vendor {
        return this._currentVendor;
    }

    set vendor(vendor: Vendor) {
        this._currentVendor = vendor;
    }

    get account(): number {
        return this._account;
    }

    constructor(private http: HttpClient,
                private userService: UserService,
                private loadingService: LoadingService) {

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

    getIncomes() {
        // this._currentVendor.summary = 0;
        this.http.get<number>('order/incomes').subscribe(
            res => {
                console.log(res);
                this._account = res;
            });
    }
}
