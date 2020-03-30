import {Order} from './order';
import {Vendor} from './vendor';

export class Bid {
    id: number;
    vendor: Vendor;
    description: string;
    price: number;
    createTime: Date;
    order: Order;
}
