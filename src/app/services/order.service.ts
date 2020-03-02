import {Injectable} from '@angular/core';
import {OrderStatus} from '../classes/order-status';
import {HttpClient} from '@angular/common/http';
import {Order} from '../classes/order';
import {VendorCategory} from '../classes/vendor-category';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private httpClient: HttpClient) {
    }

    getOrders(filter: OrderStatus): Order[] {
        switch (filter) {
            case OrderStatus.Pending:
                return [
                    {
                        id: 1,
                        uid: 1,
                        vid: 1,
                        description: 'asdasd',
                        title: 'Really need someone help me',
                        price: 20.99,
                        type: VendorCategory.ComputerRepair,
                        status: OrderStatus.Pending,
                        serverProvider: 'Jack',
                        time: '02/01/2020',
                        imgUrl: '../../assets/order/cleaner.png'
                    },
                ];
            case OrderStatus.Biding:
                return [
                    {
                        id: 1,
                        uid: 1,
                        vid: 1,
                        description: 'asdasd',
                        title: 'Look for cleaner',
                        price: 12.99,
                        type: VendorCategory.ComputerRepair,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/repair.png'
                    }];
            case OrderStatus.Progressing:
                return [
                    {
                        id: 1,
                        uid: 1,
                        vid: 1,
                        description: 'asdasd',
                        title: 'Look for cleaner',
                        price: 12.99,
                        type: VendorCategory.ComputerRepair,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/weedcleaner.png'
                    },
                    {
                        id: 1,
                        uid: 1,
                        vid: 1,
                        description: 'asdasd',
                        title: 'Look for cleaner',
                        price: 12.99,
                        type: VendorCategory.ComputerRepair,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/weedcleaner.png'
                    }];
            case OrderStatus.Completed:
                return [
                    {
                        id: 1,
                        uid: 1,
                        vid: 1,
                        description: 'asdasd',
                        title: 'Look for cleaner',
                        price: 12.99,
                        type: VendorCategory.ComputerRepair,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/dogwalker.png'
                    },
                    {
                        id: 1,
                        uid: 1,
                        vid: 1,
                        description: 'asdasd',
                        title: 'Look for cleaner',
                        price: 12.99,
                        type: VendorCategory.ComputerRepair,
                        status: OrderStatus.Waiting,
                        serverProvider: 'Bill',
                        time: '01/01/2020',
                        imgUrl: '../../assets/order/dogwalker.png'
                    },
                    {
                        id: 1,
                        uid: 1,
                        vid: 1,
                        description: 'asdasd',
                        title: 'Look for cleaner',
                        price: 12.99,
                        type: VendorCategory.ComputerRepair,
                        status: OrderStatus.Waiting,
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
