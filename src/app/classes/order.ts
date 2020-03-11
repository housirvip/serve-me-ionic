import {OrderStatus} from './order-status';
import {VendorCategory} from './vendor-category';
import {User} from './user';
import {Vendor} from './vendor';
import {Address} from './address';
import {Bid} from './bid';
import {Review} from './review';

export class Order {
    id: number;
    user: User;
    vendor: Vendor;
    review: Review;
    title: string;
    description: string;
    price: number;
    category: VendorCategory;
    status: OrderStatus;
    time: Date;
    createTime: Date;
    updateTime: Date;
    imgUrls: string[];
    address: Address;
    bids: Bid[];
}
