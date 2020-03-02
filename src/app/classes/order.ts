import {OrderStatus} from './order-status';
import {VendorCategory} from './vendor-category';

export class Order {
    id: number;
    uid: number;
    vid: number;
    title: string;
    description: string;
    price: number;
    type: VendorCategory;
    status: OrderStatus;
    serverProvider: string;
    time: string;
    imgUrl: string;
    // address: Address;
}
