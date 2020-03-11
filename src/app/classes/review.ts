import {User} from './user';
import {Vendor} from './vendor';
import {Order} from './order';

export class Review {
    id: number;
    user: User;
    vendor: Vendor;
    order: Order;
    title: string;
    description: string;
    rate: number;
    createTime: Date;
    updateTime: Date;
    imgUrls: string[];
}
