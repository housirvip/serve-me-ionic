import {Injectable} from '@angular/core';
import {OrderStatus} from '../classes/order-status';
import {HttpClient} from '@angular/common/http';
import {BaseResponse} from '../core/base-response';
import {Order} from '../classes/order';
import {Bid} from '../classes/bid';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
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

    constructor(private http: HttpClient) {
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

    getOrders(filter: OrderStatus) {
        this.http.get<BaseResponse>('order', {}).subscribe(res => {
            console.log(res.result);
            if (res.code !== 0) {
                return;
            }
            this._orders = res.result;
        });
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
        this.http.put<BaseResponse>('order/bid', bid).subscribe(
            res => {
            });
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
