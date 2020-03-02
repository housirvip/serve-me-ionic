import {Injectable} from '@angular/core';
import {OrderStatus} from '../classes/order-status';
import {HttpClient} from '@angular/common/http';
import {BaseResponse} from '../core/base-response';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) {
    }

    getOrderById(id: number): Observable<BaseResponse> {
        return this.http.get<BaseResponse>('order/' + id, {});
    }

    getOrders(filter: OrderStatus): Observable<BaseResponse> {
        return this.http.get<BaseResponse>('order', {});
    }
}
