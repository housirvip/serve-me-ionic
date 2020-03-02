import {Injectable} from '@angular/core';
import {Address} from '../classes/address';
import {BaseResponse} from '../core/base-response';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    get currentAddressList(): Address[] {
        return this._currentAddressList;
    }

    // tslint:disable-next-line:variable-name
    private _currentAddressList: Address[];

    constructor(private http: HttpClient) {
    }

    getAddress() {
        this.http.get<BaseResponse>('user/address', {}).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this._currentAddressList = res.result;
            });
    }

    deleteAddress() {

    }

    updateAddress(address: Address) {
        this.http.put<BaseResponse>('user/address', address).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this.getAddress();
            });
    }

    getCurrentAddressFromGoogleMap() {
        return Address;
    }

    verifyState(state: string) {
        return false;
    }

    verifyCity(state: string) {
        return false;
    }
}
