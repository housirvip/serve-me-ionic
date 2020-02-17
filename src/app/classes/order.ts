import {WorkType} from './work-type';
import {OrderStatus} from './order-status';

export class Order {
    title: string;
    price: string;
    type: WorkType;
    status: OrderStatus;
    serverProvider: string;
    time: string;
    imgUrl: string;
}
