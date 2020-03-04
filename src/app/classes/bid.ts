import {Order} from './order';

export class Bid {
    id: number;
    // todo change uid to vid
    uid: number;
    vid: number;
    description: string;
    price: number;
    createTime: Date;
    order: Order;
}
