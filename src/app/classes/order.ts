import {WorkType} from './work-type';
import {OrderStatus} from './order-status';
import {Address} from './address';

export class Order {
    title: string;
    price: string;
    type: WorkType;
    status: OrderStatus;
    serverProvider: string;
    time: string;
    address: Address ;
    imgUrl: string;
}
