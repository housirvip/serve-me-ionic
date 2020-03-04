import {Injectable} from '@angular/core';
import {Address} from '../classes/address';
import {BaseResponse} from '../core/base-response';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    get currentAddress(): Address {
        return this._currentAddress;
    }

    get addresses(): Address[] {
        return this._addresses || [];
    }

    // tslint:disable-next-line:variable-name
    private _addresses: Address[];
    // tslint:disable-next-line:variable-name
    private _currentAddress: Address;

    constructor(private http: HttpClient,
                private loadingService: LoadingService) {
    }

    getAddresses() {
        this.loadingService.present().then(r => {
        });
        this.http.get<BaseResponse>('user/address', {}).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                if (res.code !== 0) {
                    return;
                }
                this._addresses = res.result;
            });
    }

    deleteAddress(id: number) {
        this.loadingService.present().then(r => {
        });
        this.http.delete<BaseResponse>('user/address/' + id, {}).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                if (res.code !== 0) {
                    return;
                }

                const tmp = [];
                for (const addressIndex of this._addresses) {
                    if (addressIndex.id === id) {
                        continue;
                    }
                    tmp.push(addressIndex);
                }
                this._addresses = tmp;
            });
    }


    updateAddress(address: Address) {
        this.loadingService.present().then(r => {
        });
        this.http.put<BaseResponse>('user/address', address).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                if (res.code !== 0) {
                    return;
                }
                this._currentAddress = res.result as Address;
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
