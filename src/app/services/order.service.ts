import {Injectable} from '@angular/core';
import {workType} from '../classes/workType';
import {orderStatus} from '../classes/orderStatus';
import {HttpClient} from '@angular/common/http';
import {Order} from '../classes/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private httpClient: HttpClient) {
    }

    getOrders(filter: orderStatus): Order[] {
        switch (filter) {
            case orderStatus.waiting:
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
            case orderStatus.biding:
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
            case orderStatus.progress:
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
            case orderStatus.completed:
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
            default:
                return [];
        }
    }
}
