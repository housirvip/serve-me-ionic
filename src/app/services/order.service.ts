import {Injectable} from '@angular/core';
import {workType} from '../classes/orders/workType';
import {orderStatus} from '../classes/orders/orderStatus';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private httpClient: HttpClient) {
    }

    getWaitingOrder() {
        return [
            {
                title: 'Look for cleaner',
                price: '12.99$',
                type: workType.Cleaner,
                status: orderStatus.waiting,
                serverProvider: 'Bill',
                time: '01/01/2020',
                imgUrl: '../../assets/order/cleaner.png'
            },
            {
                title: 'Really need someone help me',
                price: '20.99$',
                type: workType.Reparing,
                status: orderStatus.waiting,
                serverProvider: 'Jack',
                time: '02/01/2020',
                imgUrl: '../../assets/order/cleaner.png'
            },
        ];
    }
    getBidingOrder() {
        return [
            {
                title: 'Look for cleaner',
                price: '12.99$',
                type: workType.Cleaner,
                status: orderStatus.waiting,
                serverProvider: 'Bill',
                time: '01/01/2020',
                imgUrl: '../../assets/order/repair.png'
            }];
    }
    getProgressOrder() {
        return [
            {
                title: 'Look for cleaner',
                price: '12.99$',
                type: workType.Cleaner,
                status: orderStatus.waiting,
                serverProvider: 'Bill',
                time: '01/01/2020',
                imgUrl: '../../assets/order/weedcleaner.png'
            },
            {
                title: 'Look for cleaner',
                price: '12.99$',
                type: workType.Cleaner,
                status: orderStatus.waiting,
                serverProvider: 'Bill',
                time: '01/01/2020',
                imgUrl: '../../assets/order/weedcleaner.png'
            }];
    }

    getCompletedOrder() {
        return [
            {
                title: 'Look for cleaner',
                price: '12.99$',
                type: workType.Cleaner,
                status: orderStatus.waiting,
                serverProvider: 'Bill',
                time: '01/01/2020',
                imgUrl: '../../assets/order/dogwalker.png'
            },
            {
                title: 'Look for cleaner',
                price: '12.99$',
                type: workType.Cleaner,
                status: orderStatus.waiting,
                serverProvider: 'Bill',
                time: '01/01/2020',
                imgUrl: '../../assets/order/dogwalker.png'
            },
            {
                title: 'Look for cleaner',
                price: '12.99$',
                type: workType.Cleaner,
                status: orderStatus.waiting,
                serverProvider: 'Bill',
                time: '01/01/2020',
                imgUrl: '../../assets/order/dogwalker.png'
            }
        ];
    }
}
