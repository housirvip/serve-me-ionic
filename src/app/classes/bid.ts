import {Order} from './order';

export class Bid {
    id: number;
    // todo change to vid or vendor object
    uid: number;
    description: string;
    price: number;
    createTime: Date;
    order: Order;
}
