import {Injectable} from '@angular/core';
import {Address} from '../classes/address';
import {BaseResponse} from '../core/base-response';
import {HttpClient} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {UserService} from './user.service';

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
                private userService: UserService,
                private loadingService: LoadingService) {
    }

    getList() {
        this.loadingService.present().then(r => {
        });
        this.http.get<Address[]>('addresses', {
            params: {
                user: this.userService.user.id.toString(),
            }
        }).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                this._addresses = res;
            });
    }

    delete(id: number) {
        this.loadingService.present().then(r => {
        });
        this.http.delete<BaseResponse>('addresses/' + id, {}).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
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

    create(address: Address) {
        this.loadingService.present().then(r => {
        });
        this.http.post<Address>('addresses', address).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                this._currentAddress = res;
                this.getList();
            });
    }

    update(address: Address) {
        this.loadingService.present().then(r => {
        });
        this.http.put<Address>('addresses/' + address.id, address).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                this._currentAddress = res;
                this.getList();
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
