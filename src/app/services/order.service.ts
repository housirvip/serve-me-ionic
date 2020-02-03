import {Injectable} from '@angular/core';
import {Order} from '../classes/orders/order';
import {workType} from '../classes/orders/workType';
import {orderStatus} from '../classes/orders/orderStatus';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[];

  constructor() {
  }

  get order(): Order[] {
    return this.orders;
  }

  RequestOrder() {
    this.orders = [
      {
        title: 'Look for cleaner',
        price: '12.99$',
        type: workType.Cleaner,
        status: orderStatus.waiting,
        serverProvider: 'Bill',
        time: '01/01/2020',
      },
      {
        title: 'Really need someone help me',
        price: '20.99$',
        type: workType.Reparing,
        status: orderStatus.waiting,
        serverProvider: 'Jack',
        time: '02/01/2020',
      },
    ];
  }
}
