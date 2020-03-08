import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseResponse} from '../core/base-response';
import {Order} from '../classes/order';
import {Bid} from '../classes/bid';
import {LoadingService} from './loading.service';
import {OrderRequest} from '../classes/spec/order-request';
import {BidRequest} from '../classes/spec/bid-request';
import {environment} from '../../environments/environment';

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
        return this.http.get<Order>('orders/' + id, {}).subscribe(
            res => {
                this._currentOrder = res;
            }
        );
    }

    getOrders(request: OrderRequest) {
        this.loadingService.present().then(r => {
        });
        this.http.get<Order[]>('orders', {
            params: request.toParam()
        }).subscribe(res => {
            this.loadingService.dismiss().then(r => {
            });
            this._orders = res;
            if (!environment.production) {
                console.log(res);
            }
        });
    }

    getBids(request: BidRequest) {
        this.loadingService.present().then(r => {
        });
        this.http.get<Bid[]>('bids', {
            params: request.toParam()
        }).subscribe(res => {
            this.loadingService.dismiss().then(r => {
            });
            this._bids = res;
            if (!environment.production) {
                console.log(res);
            }
        });
    }

    // api for customer, create a new order, then status => Biding
    createOrder(order: Order) {
        return this.http.post<Order>('orders', order);
    }

    updateOrder(order: Order) {
        this.http.put<Order>('orders/' + order.id, order).subscribe(
            res => {
                if (!environment.production) {
                    console.log(res);
                }
            });
    }

    // not suggested to do this
    deleteOrder(id: number) {
        this.http.delete<Order>('orders/' + id, {}).subscribe(
            res => {
                if (!environment.production) {
                    console.log(res);
                }
            });
    }

    // api for vendor, give a new bid to an order, then status still Biding
    bid(bid: Bid) {
        return this.http.put<Bid>('order/bid', bid);
    }

    // api for customer, accept the bid, then status => Accepting
    accept(bid: Bid) {
        this.http.put<Bid>('order/accept', bid).subscribe(
            res => {
                if (!environment.production) {
                    console.log(res);
                }
            });
    }

    // api for vendor, accept the order of which owner accept your bid, then status => Pending(waiting customer pay for it)
    confirm(bid: Bid) {
        this.http.put<BaseResponse>('order/confirm', bid).subscribe(
            res => {
                if (!environment.production) {
                    console.log(res);
                }
            });
    }

    // api for customer, pay to an order, then status => Progressing
    pay(order: Order) {
        this.http.put<Order>('order/pay', order).subscribe(
            res => {
                if (!environment.production) {
                    console.log(res);
                }
            });
    }

    // api for vendor, mark this order as finished, then status => Finished
    finish(order: Order) {
        this.http.put<Order>('order/finish', order).subscribe(
            res => {
                if (!environment.production) {
                    console.log(res);
                }
            });
    }

    // api for customer, mark this order as completed, then status => Completed
    complete(order: Order) {
        this.http.put<Order>('order/complete', order).subscribe(
            res => {
                if (!environment.production) {
                    console.log(res);
                }
            });
    }
}
