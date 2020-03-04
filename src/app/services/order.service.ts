import {Injectable} from '@angular/core';
import {OrderStatus} from '../classes/order-status';
import {HttpClient} from '@angular/common/http';
import {BaseResponse} from '../core/base-response';
import {Order} from '../classes/order';
import {Bid} from '../classes/bid';
import {LoadingService} from './loading.service';
import {WorkType} from '../classes/work-type';
import {Jorder} from '../classes/Jorder';

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

    getOrders() {
        var _orders: Order[] = []
        this.loadingService.present();
        return this.http.get<BaseResponse>('order', {});
    }

    createOrder(order: Order) {
        return this.http.post<BaseResponse>('order', order);
    }

    updateOrder(order: Order) {
        this.http.put<BaseResponse>('order', order).subscribe(
            () => {
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

    getHarCodeOrders(filter: OrderStatus): Jorder[] {
        switch (filter) {
            case OrderStatus.Waiting:
                return [
                    {
                        title: 'Looking for cleaner',
                        price: '12.99$',
                        type: WorkType.Cleaner,
                        status: OrderStatus.Waiting,
                        requestor: 'John',
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/cleaner.png',
                        orderID: 0,
                        description:
                            'My house is super dirty and I am in need of a cleaner.',
                        location: 'Rowlett, TX'
                    },
                    {
                        title: 'Really need someone help me',
                        price: '20.99$',
                        type: WorkType.Repairing,
                        status: OrderStatus.Waiting,
                        requestor: 'Rose',
                        serverProvider: 'Jack',
                        time: '02/01/2020',
                        imgUrl: '../../assets/order/repair.png',
                        orderID: 1,
                        description:
                            'I messed up my laptop and need someone to fix it ASAP.',
                        location: 'Dallas, TX'
                    }
                ];
            case OrderStatus.Biding:
                return [
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.Cleaner,
                        status: OrderStatus.Waiting,
                        requestor: 'Jay',
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/repair.png',
                        orderID: 2,
                        description:
                        // tslint:disable-next-line:max-line-length
                            'My room is house is a mess. I have gests tonight so I\'m looking for cleaning services. House has 3 rooms and 2 bathrooms',
                        location: 'Rockwall, TX'
                    }
                ];
            case OrderStatus.Progressing:
                return [
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.Cleaner,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/weedcleaner.png',
                        requestor: 'Sarah',
                        orderID: 3,
                        description: 'lorem ipsum order 3',
                        location: 'Rowlett, TX'
                    },
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.Cleaner,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/weedcleaner.png',
                        requestor: 'Jose',
                        orderID: 4,
                        description: 'lorem ipsum order 4',
                        location: 'Rowlett, TX'
                    }
                ];
            case OrderStatus.Completed:
                return [
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.Cleaner,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/dogwalker.png',
                        requestor: 'Jasmine',
                        orderID: 5,
                        description: 'lorem ipsum order 5',
                        location: 'Rowlett, TX'
                    },
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.Cleaner,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/dogwalker.png',
                        requestor: 'Isabelle',
                        orderID: 6,
                        description: 'lorem ipsum order 6',
                        location: 'Rowlett, TX'
                    },
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.Cleaner,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/dogwalker.png',
                        requestor: 'Max',
                        orderID: 7,
                        description: 'lorem ipsum order 7',
                        location: 'Rowlett, TX'
                    }
                ];
            default:
                return [];
        }
    }
}
