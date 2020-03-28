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

    // tslint:disable-next-line:variable-name
    private _vendors: Vendor[];

    constructor(private http: HttpClient,
                private userService: UserService,
                private loadingService: LoadingService) {
    }

    getVendors(request: VendorRequest) {
        // this.loadingService.present().then(r => {
        // });
        this.http.get<Vendor[]>('vendors', {
            params: request.toParam()
        }).subscribe(res => {
            console.log(res);
            // this.loadingService.dismiss().then(r => {
            // });
            this._vendors = res;
        });
    }

    newVendors(vendor: Vendor) {
        this.http.put<User>('vendor/upgrade', vendor).subscribe(
            res => {
                this.userService.getUser();
            });
    }
}
