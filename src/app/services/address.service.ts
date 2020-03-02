import {Injectable} from '@angular/core';
import {Address} from '../classes/address';
import {BaseResponse} from '../core/base-response';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    get currentAddress(): Address {
        return this._currentAddress;
    }

    get addresses(): Address[] {
        return this._addresses;
    }

    // tslint:disable-next-line:variable-name
    private _addresses: Address[];
    // tslint:disable-next-line:variable-name
    private _currentAddress: Address;

    constructor(private http: HttpClient) {
    }

    getAddresses() {
        this.http.get<BaseResponse>('user/address', {}).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this._addresses = res.result;
            });
    }

    deleteAddress(id: number): Observable<BaseResponse> {
        return this.http.delete<BaseResponse>('order/' + id, {});
    }

    updateAddress(address: Address) {
        this.http.put<BaseResponse>('user/address', address).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this.getAddresses();
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
