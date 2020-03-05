import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseResponse} from '../core/base-response';
import {Order} from '../classes/order';
import {Bid} from '../classes/bid';
import {LoadingService} from './loading.service';
import {OrderRequest} from '../classes/spec/order-request';
import {BidRequest} from '../classes/spec/bid-request';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    get bids(): Bid[] {
        return this._bids;
    }
    get currentOrder(): Order {
        return this._currentOrder;
    }

    get orders(): Order[] {
        return this._orders;
    }

    // tslint:disable-next-line:variable-name
    private _orders: Order[];
    // tslint:disable-next-line:variable-name
    private _currentOrder: Order;
    // tslint:disable-next-line:variable-name
    private _bids: Bid[];

    constructor(private http: HttpClient,
                private loadingService: LoadingService) {
    }

    getOrder(id: number) {
        return this.http.get<BaseResponse>('order/' + id, {}).subscribe(
            res => {
                if (res.code !== 0) {
                    return;
                }
                this._currentOrder = res.result;
            }
        );
    }

    getOrders(request: OrderRequest) {
        this.loadingService.present().then(r => {
        });
        this.http.get<BaseResponse>('order', {
            params: request.toParam()
        }).subscribe(res => {
            console.log(res.result);
            this.loadingService.dismiss().then(r => {
            });
            if (res.code !== 0) {
                return;
            }
            this._orders = res.result;
        });
    }

    getBids(request: BidRequest) {
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
            this._bids = res.result;
        });
    }

    createOrder(order: Order) {
        return this.http.post<BaseResponse>('order', order);
    }

    updateOrder(order: Order) {
        this.http.put<BaseResponse>('order', order).subscribe(
            res => {
            });
    }

    deleteOrder(id: number) {
        this.http.delete<BaseResponse>('order/' + id, {}).subscribe(
            res => {
            });
    }

    bid(bid: Bid) {
      return  this.http.put<BaseResponse>('order/bid', bid);
    }

    confirm(bid: Bid) {
        this.http.put<BaseResponse>('order/confirm', bid).subscribe(
            res => {
            });
    }

    pay(order: Order) {
        this.http.put<BaseResponse>('order/pay', order).subscribe(
            res => {
            });
    }

    finish(order: Order) {
        this.http.put<BaseResponse>('order/finish', order).subscribe(
            res => {
            });
    }
}
