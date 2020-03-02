import {OrderStatus} from './order-status';
import {VendorCategory} from './vendor-category';
import {User} from './user';
import {Vendor} from './vendor';
import {Address} from './address';
import {Bid} from './bid';

export class Order {
    id: number;
    user: User;
    vendor: Vendor;
    title: string;
    description: string;
    price: number;
    category: VendorCategory;
    status: OrderStatus;
    time: string;
    createTime: Date;
    updateTime: Date;
    imgUrl: string;
    address: Address;
    bids: Bid[];
}
