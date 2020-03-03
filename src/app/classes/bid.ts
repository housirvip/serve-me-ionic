import {Order} from './order';

export class Bid {
    id: number;
    uid: number;
    description: string;
    price: number;
    createTime: Date;
    order: Order;
}
