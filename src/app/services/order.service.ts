import {Injectable} from '@angular/core';
import {WorkType} from '../classes/work-type';
import {OrderStatus} from '../classes/order-status';
import {HttpClient} from '@angular/common/http';
import {Order} from '../classes/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private httpClient: HttpClient) {
    }

    getOrders(filter: OrderStatus): Order[] {
        switch (filter) {
            case OrderStatus.waiting:
                return [
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/cleaner.png'
                    },
                    {
                        title: 'Really need someone help me',
                        price: '20.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
                        serverProvider: 'Jack',
                        time: '02/01/2020',
                        imgUrl: '../../assets/order/cleaner.png'
                    },
                ];
            case OrderStatus.biding:
                return [
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/repair.png'
                    }];
            case OrderStatus.progress:
                return [
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/weedcleaner.png'
                    },
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/weedcleaner.png'
                    }];
            case OrderStatus.completed:
                return [
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/dogwalker.png'
                    },
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/dogwalker.png'
                    },
                    {
                        title: 'Look for cleaner',
                        price: '12.99$',
                        type: WorkType.ComputerRepair,
                        status: OrderStatus.waiting,
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
