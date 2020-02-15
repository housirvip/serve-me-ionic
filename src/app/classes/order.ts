import {workType} from './workType';
import {orderStatus} from './orderStatus';

export class Order {
    title: string;
    price: string;
    type: workType;
    status: orderStatus;
    serverProvider: string;
    time: string;
    imgUrl: string;
}
